/**
 * ENUMS or Enumeration
 * const INITIALISED = "initialised"
 * Ticket status ["initialised", "cancelled", "resolved", "pending"]
 * t1.status == "resolved"
 */

enum TicketStatus {
    INITIALISED = "initialised",
    CANCELLED = "cancelled",
    PENDING = "pending", 
    CLOSED = "closed",
}

const Ticket = {
    id: 1,
    title: "new ticket",
    status: TicketStatus.INITIALISED,
}
console.log(Ticket);
if(Ticket.status == TicketStatus.CLOSED) {
    console.log("Done");
}

enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    Created = 201,
    BadRequest = 400,
}

const response = {
    url: "www.something.com",
    type: "GET",
    data: "some string",
    status: StatusCode.Success
}

console.log(response);