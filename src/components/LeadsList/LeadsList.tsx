"use client";
import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import { fetchLeads } from "./service";
import { Lead } from "@/utils/constants";

const columns = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Phone Number",
    value: "phoneNumber",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Staus",
    value: "status",
  },
  {
    label: "Action",
    value: "action",
  },
];

const LeadsList = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  useEffect(() => {
    // fetch data from api
    getLeadsData();
    // setLeads(data);
  }, []);

  const getLeadsData = async () => {
    const leadsData: Lead[] = await fetchLeads();
    setLeads(leadsData);
  };

  const handleSendSms = async (phoneNumber: string) => {
    // const response = await sendSms(phoneNumber);

    const updatedLeads = leads.map((lead) => {
      if (lead.phoneNumber === phoneNumber) {
        return {
          ...lead,
          status: "Reached Out",
        };
      }
      return lead;
    });

    setLeads(updatedLeads);
  };

  return (
    <div>
      <Table columns={columns} leads={leads} handleSendSms={handleSendSms} />
    </div>
  );
};

export default LeadsList;
