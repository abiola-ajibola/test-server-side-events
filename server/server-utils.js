export function eventsHandler(request, response) {
  return ({ clients, facts }) => {
    const headers = {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
    };
    response.writeHead(200, headers);

    /**
     * note the /n/n at the end of the data
     * It signifies the end of a stream of data
     */
    const data = `data: ${JSON.stringify(facts)}\n\n`;

    response.write(data);

    const clientId = Date.now();

    const newClient = {
      id: clientId,
      response,
    };

    clients.push(newClient);

    request.on("close", () => {
      console.log(`${clientId} Connection closed`);
      clients = clients.filter((client) => client.id !== clientId);
    });
  };
}

function sendEventsToAll(newFact, clients) {
  clients.forEach((client) =>
    client.response.write(`data: ${JSON.stringify(newFact)}\n\n`)
  );
}

/**
 * When a new fatc is added via a post request, it triggers
 * sendEventsToAll to send the next data
 */
export function addFact(request, respsonse) {
  return ({ facts, clients }) => {
    const newFact = request.body;
    facts.push(newFact);
    respsonse.json(newFact);
    return sendEventsToAll(newFact, clients);
  };
}
