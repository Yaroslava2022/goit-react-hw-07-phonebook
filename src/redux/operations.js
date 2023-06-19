import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://648f305575a96b664444cf9f.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_,  {rejectWithValue }) => {
      
      try {
        const response = await axios.get("/contacts");
        console.log(response.data)
        return response.data;
      } catch (err) {
        console.log(err);
          return rejectWithValue(err.response.data);
      }
    }
  );

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, number }, { rejectWithValue }) => {
      const contact = { name, number };
      try {
        const response = await axios.post("/contacts", contact);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, { rejectWithValue }) => {
      try {
       
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (err) {
        console.log(err.response.data);
        return rejectWithValue(err.response.data);
      }
    }
  );