import React from "react";

import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from "@mui/material";

const TestimonialCard = ({ testimonial, onDelete ,onUpdate}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={testimonial.image}
        alt={`${testimonial.name}'s testimonial`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {testimonial.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Role:</strong> {testimonial.userType}
        </Typography> 
        <Typography variant="body2" color="text.secondary">
          <strong>Rating:</strong>{testimonial.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Updated At:</strong> {new Date(testimonial.updatedAt).toLocaleString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Comment:</strong> {testimonial.comment}
        </Typography>
      </CardContent>
      
      
      <CardActions>
        <Button size="small" color="error" onClick={() => onDelete(testimonial._id)}>
          Delete
        </Button>
        <Button size="small" color={testimonial.isPublic ? "success":"error"} onClick={() => onUpdate(testimonial._id)}>
          {testimonial.isPublic ? "Make private": "Make Public"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default TestimonialCard;
