import React from 'react';
import { 
  Container, Box, Typography, TextField, Button, 
  Divider, useTheme, useMediaQuery
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TelegramIcon from '@mui/icons-material/Telegram';
const ContactForm = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 4, fontFamily: 'Tajawal, sans-serif' }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 1,
            color: '#2c3e50'
          }}
        >
          تواصل معي
        </Typography>
        
        <Typography variant="body1" sx={{ color: '#7f8c8d', mb: 2 }}>
          أرسل لي رسالة وسأرد عليك في أقرب وقت ممكن
        </Typography>
        

      </Box>

      <Box 
        component="form"
        sx={{ 
          p: 4,
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e0e0e0',
          backgroundColor: '#ffffff'
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 1,
              color: '#2c3e50'
            }}
          >
            الاسم الكامل
          </Typography>
          <TextField
            fullWidth
            placeholder="أدخل اسمك"
            variant="outlined"
            size="medium"
          />
        </Box>
        
        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 1,
              color: '#2c3e50'
            }}
          >
            البريد الإلكتروني
          </Typography>
          <TextField
            fullWidth
            placeholder="أدخل بريدك الإلكتروني"
            variant="outlined"
            size="medium"
          />
        </Box>
        
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 1,
              color: '#2c3e50'
            }}
          >
            الرسالة
          </Typography>
          <TextField
            fullWidth
            placeholder="اكتب رسالتك هنا"
            variant="outlined"
            multiline
            rows={4}
          />
        </Box>
        
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<TelegramIcon />}
          fullWidth
          sx={{
            borderRadius: '6px',
            py: 1.5,
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'background 0.3s ease, box-shadow 0.3s ease',
            background: "linear-gradient(132deg,rgba(3, 107, 252, 1) 0%, rgba(112, 0, 204, 1) 100%)",
            '&:hover': {
              background: "linear-gradient(-48deg,rgba(3, 107, 252, 1) 0%, rgba(112, 0, 204, 1) 100%)",
              boxShadow: '0 4px 8px rgba(52, 152, 219, 0.3)',
            },
            boxShadow: 'none',
            textTransform: 'none',
          }}
        >
          إرسال الرسالة 
        </Button>
      </Box>

    </Container>
  );
};

export default ContactForm;