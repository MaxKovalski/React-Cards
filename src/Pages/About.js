import React from "react";
import { Typography, Container, Paper, Box } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          About Business Card Manager
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to Business Card Manager, your all-in-one solution for
          organizing and managing business cards for your business. Our web
          application simplifies the way you network and manage your business
          cards.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Key Features
        </Typography>

        <ul>
          <li>
            <Typography variant="body1">
              <strong>Create and Edit Business Cards</strong>: Effortlessly
              create and customize business cards with your business details.
              Edit and update your cards as your business information changes.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Favorite Cards</strong>: Mark your most important business
              cards as favorites for quick access.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>User-Friendly Interface</strong>: Enjoy a sleek and
              intuitive user interface that makes card management a breeze.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Admin Panel</strong>: Admins can manage user accounts,
              including creating, editing, and deleting user profiles. Admins
              can also assist with card deletion when necessary.
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" component="h2" gutterBottom>
          How It Works
        </Typography>

        <ol>
          <li>
            <Typography variant="body1">
              <strong>Register and Log In</strong>: Register for a free account
              with your email and password. Log in to access all the features of
              the application.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Create Your Business Cards</strong>: Use our user-friendly
              card creation tool to design your business cards. Provide details
              such as your business title, subtitle, description, contact
              information, and location.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Manage Your Cards</strong>: Edit and update your business
              cards as needed. Mark important cards as favorites for quick
              access.
            </Typography>
          </li>
        </ol>

        <Typography variant="h6" component="h2" gutterBottom>
          Why Choose Us
        </Typography>

        <ul>
          <li>
            <Typography variant="body1">
              Simplify your business card management with our user-friendly web
              application.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Ensure that your business contacts and information are always up
              to date.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Enjoy the convenience of marking favorite cards for quick
              reference.
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" component="h2" gutterBottom>
          Security and Privacy
        </Typography>

        <ul>
          <li>
            <Typography variant="body1">
              Your data is secure and protected through our user authentication
              and data management systems.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              We take your privacy seriously and ensure that your information is
              kept safe.
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" component="h2" gutterBottom>
          Feedback and Support
        </Typography>

        <Typography variant="body1">
          We value your feedback. If you have any questions or need assistance,
          please don't hesitate to contact our support team.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          About Us
        </Typography>

        <Typography variant="body1">
          Learn more about our team and the mission behind Business Card
          Manager.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Get in Touch
        </Typography>

        <Typography variant="body1">
          Contact us for inquiries, partnerships, or support.
        </Typography>
      </Paper>
    </Container>
  );
}
