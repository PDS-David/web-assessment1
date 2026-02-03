# Web Development Assessment Application

## Overview
This is a comprehensive web-based assessment application for evaluating students' knowledge in HTML, CSS, PHP, and JavaScript. The application presents 100 multiple-choice questions with a 1-hour time limit.

## Features

### For Students:
- **Registration**: Students provide their name and WhatsApp number
- **Timed Assessment**: 1-hour countdown timer with visual warnings
- **Progressive Question Display**: One question at a time with navigation
- **Progress Tracking**: Visual progress bar showing completion status
- **Instant Results**: Score displayed immediately after submission
- **WhatsApp Report**: Detailed performance report sent via WhatsApp
- **Topic Breakdown**: Performance analysis by HTML, CSS, PHP, and JavaScript

### For Administrators:
- **Secure Login**: Password-protected admin panel (password: `asdf`)
- **Dashboard Statistics**: Total students, average score, highest/lowest scores
- **Student Results Table**: Comprehensive view of all assessment results
- **Search Functionality**: Filter results by student name or phone number
- **Export to CSV**: Download all results for external analysis
- **WhatsApp Links**: Direct links to contact students via WhatsApp

## Files Included

1. **assessment.html** - Main assessment interface for students
2. **admin.html** - Admin panel for viewing results
3. **app.js** - Application logic and assessment functionality
4. **questions.js** - Questions and answers loaded from Word documents
5. **README.md** - This documentation file

## How to Use

### Setting Up:
1. Place all files in the same directory
2. Open `assessment.html` in a web browser to start

### For Students:
1. Open `assessment.html`
2. Enter your full name and WhatsApp number (must start with +234)
3. Click "Start Assessment"
4. Answer questions one at a time (navigate with Previous/Next buttons)
5. Submit when complete or wait for auto-submission after 1 hour
6. View your score
7. Click "Send Report to WhatsApp" to receive detailed report

### For Administrators:
1. Open `admin.html`
2. Enter password: `asdf`
3. View dashboard with statistics
4. Search, filter, and export student results
5. Click "View" to see detailed student performance
6. Export to CSV for record-keeping

## Technical Details

### Data Storage:
- Uses browser localStorage to persist student results
- No server or database required
- Data remains on the local machine

### WhatsApp Integration:
- Uses WhatsApp's URL scheme (`wa.me`)
- Opens WhatsApp with pre-filled report
- Student must manually click "Send"

### Questions Source:
- Questions loaded from `WDQuestions.docx`
- Answers from `WDMarkingScheme.docx`
- Automatically categorized by topic (HTML, CSS, PHP, JavaScript)

### Timer:
- 1 hour (3600 seconds) countdown
- Visual warnings at 10 minutes (yellow) and 5 minutes (red)
- Auto-submission when time expires

## Assessment Report Format

The WhatsApp report includes:
- Student name and date/time
- Overall score and percentage
- Grade classification
- Performance breakdown by topic (HTML, CSS, PHP, JavaScript)
- Personalized recommendations based on weak areas
- Suggested learning resources

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Security Notes

- Admin password is stored in code (change if needed in admin.html)
- No external dependencies or internet connection required
- All data stored locally in browser
- Students cannot access admin panel without password

## Customization

### To Change Admin Password:
Edit line 347 in `admin.html`:
```javascript
const ADMIN_PASSWORD = 'your-new-password';
```

### To Modify Timer Duration:
Edit line 8 in `app.js`:
```javascript
let timeRemaining = 3600; // Change to desired seconds
```

### To Update Questions:
Replace the Word documents and re-run the Python extraction script to generate new `questions.js`

## Troubleshooting

**Issue**: WhatsApp doesn't open
- **Solution**: Ensure WhatsApp is installed and phone number format is correct (+234...)

**Issue**: Results not saving
- **Solution**: Check browser localStorage is enabled and not full

**Issue**: Timer not working
- **Solution**: Ensure JavaScript is enabled in browser

**Issue**: Admin panel won't login
- **Solution**: Verify password is exactly `asdf` (case-sensitive)

## Contact

For technical support or questions about the assessment system, please contact the administrator at +2348107551000.

---

**Version**: 1.0
**Last Updated**: February 2026
