// import { get } from "@/services/httpService";

const mockLeadsData = [
  {
    _id: "680e7b2e87b15560352bd2e6",
    name: "Jimmy Roose",
    phoneNumber: "+91-9099682809",
    email: "jimmy.test@gmail.com",
    createdAt: "2025-04-27T18:45:02.447Z",
    updatedAt: "2025-04-27T18:45:02.447Z",
    status: "Reached Out",
    id: "680e7b2e87b15560352bd2e6",
  },
  {
    _id: "680e9c7078af221e1dc07b9a",
    name: "Rony Cameroon",
    phoneNumber: "+91-9099672805",
    email: "rcameroon.test@gmail.com",
    status: "Reached Out",
    id: "680e9c7078af221e1dc07b9a",
  },
  {
    _id: "680e9c7078af221e1dc07b99",
    name: "Neha Sharma",
    phoneNumber: "+91-9349682805",
    email: "sharmaneha.test@gmail.com",
    status: "Reached Out",
    id: "680e9c7078af221e1dc07b99",
  },
  {
    _id: "680e9c7078af221e1dc07b97",
    name: "Anderson Mathew",
    phoneNumber: "+91-9091282805",
    email: "matandy.test@gmail.com",
    status: "Pending",
    id: "680e9c7078af221e1dc07b97",
  },
];

export const fetchLeads = () => {
  // const leadsData = get("/lead");

  // return leadsData;
  return mockLeadsData;
};
