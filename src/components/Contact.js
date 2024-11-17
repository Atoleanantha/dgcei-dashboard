import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Grid, Button, CardActions, Snackbar, Alert, CircularProgress } from "@mui/material";
import { fetchData, deleteData } from "../services/apiService";
import convertToISTWithAMPM from "../services/convertToISTWithAMPM.js";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state for fetching contacts
  const [deleteLoading, setDeleteLoading] = useState(false); // Loading state for deleting
  const [successMessage, setSuccessMessage] = useState(""); // Success message for actions
  const [errorMessage, setErrorMessage] = useState(""); // Error message for actions

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  // Fetch contacts function
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const data = await fetchData("contacts/get-contact");
      setContacts(data.data);
    } catch (error) {
      setErrorMessage("Error fetching contacts.");
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete contact function
  const deleteContact = async (id) => {
    setDeleteLoading(true); // Set loading state to true when starting the delete
    try {
      await deleteData(`contacts/delete-contact/${id}`);
      setSuccessMessage("Contact deleted successfully!");
      fetchContacts(); // Refresh the contacts after deletion
    } catch (error) {
      setErrorMessage("Failed to delete contact.");
      console.error("Error deleting contact:", error);
    } finally {
      setDeleteLoading(false); // Reset delete loading state after action
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Contact Us Management
      </Typography>
      
      {loading ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {contacts.length === 0 ? (
            <Typography variant="body1">No contacts available.</Typography>
          ) : (
            contacts.map((contact) => (
              <Grid item xs={12} sm={6} md={4} key={contact._id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{contact.name}</Typography>
                    <Typography variant="body2">Email: {contact.email}</Typography>
                    <Typography variant="body2">Phone: {contact.phone}</Typography>
                    <Typography variant="body2">Message: {contact.message}</Typography>
                    <Typography variant="body2">Date & Time: {convertToISTWithAMPM(contact.createdAt)}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => deleteContact(contact._id)}
                      disabled={deleteLoading} // Disable delete button while loading
                    >
                      {deleteLoading ? <CircularProgress size={24} color="inherit" /> : "Delete"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      )}

      {/* Success Snackbar */}
      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setSuccessMessage("")} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={3000}
        onClose={() => setErrorMessage("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setErrorMessage("")} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
