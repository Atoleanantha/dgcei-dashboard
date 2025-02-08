
import React, { useEffect, useState } from "react";
import {
    Box, Typography, Grid, Button, TextField, Snackbar, Alert, CircularProgress
} from "@mui/material";
import { fetchData, deleteData, updateData } from "../services/apiService";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchTestimonial();
    }, []);

    const fetchTestimonial = async () => {
        try {
            const res = await fetchData("testimonials/get-testimonials");
            
            const sortedData = res.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            setTestimonial(sortedData);
            console.log(sortedData);
        } catch (error) {
            setErrorMessage("Failed to fetch testimonials");
            console.error("Error fetching testimonials:", error);
        }
    };
    const deleteTestimonial = async (id) => {
        try {
            await deleteData(`testimonials/delete-testimonial/${id}`);
            setSuccessMessage("Testimonial deleted successfully!");
            fetchTestimonial();
        } catch (error) {
            setErrorMessage("Failed to delete Testimonial ");
            console.error("Error deleting Testimonial :", error);
        }
    };
    const onUpdateVisibility = async (id) => {
        try {
            await updateData(`testimonials/update-visibility-testimonial/${id}/is-public`);
            setSuccessMessage("Testimonial visibility changed successfully!");
            fetchTestimonial();
        } catch (error) {
            setErrorMessage("Failed to visibility change Testimonial ");
            console.error("Error visibility changedTestimonial :", error);
        }
    };

    return (
        <div>  <Box>
            <Typography variant="h4" gutterBottom>
                Testimonials Management
            </Typography>

            <Typography variant="h5" sx={{ mt: 3 }}>
                Testimonials
            </Typography>
            <Grid container spacing={3}>
                {testimonial.map((testimonial) => (
                    <Grid item key={testimonial._id} xs={12} sm={6} md={4}>
                        <TestimonialCard testimonial={testimonial} onDelete={deleteTestimonial} onUpdate={onUpdateVisibility} />
                    </Grid>
                ))}
            </Grid>

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
        </Box></div>
    )
}

export default Testimonial