# Forms and Analytics Setup Guide

This guide explains how forms and analytics work in the Landing Factory system.

---

## Forms (Netlify Forms)

Every landing page includes a built-in contact form that automatically captures visitor information.

### How Forms Work

1.  **Automatic Integration:** The form is built into every landing page and automatically sends submissions to Netlify.
2.  **Form Fields:** The form captures:
   - Name
   - Email
   - Phone
   - Company
   - Message
   - UTM parameters (automatically captured from URL)
   - Landing slug (which landing page they came from)

3.  **Submissions Storage:** All form submissions are stored in your Netlify dashboard under **Forms** -> **Submissions**.

### Viewing Form Submissions

1.  Log in to your Netlify account
2.  Go to your site **landing-factory**
3.  In the left menu, select **Forms**
4.  You'll see all submissions from all landing pages
5.  Each submission shows:
   - Date and time
   - Name, email, phone, company
   - UTM parameters (if provided)
   - Which landing page it came from

### Email Notifications

To receive email notifications when someone submits a form:

1.  In Netlify, go to **Forms** -> **Form settings**
2.  Look for **Email notifications**
3.  Enter your email address
4.  Netlify will send you an email every time someone submits a form

### Custom Form Names

Each landing page has its own form with a unique name based on the landing slug. For example:
- Landing: `example-company` → Form name: `landing-example-company`
- Landing: `pzs-ceo` → Form name: `landing-pzs-ceo`

This allows you to track which landing page each submission came from.

---

## Analytics and UTM Tracking

The system automatically captures UTM parameters from the URL and stores them with each form submission.

### UTM Parameters

UTM parameters are special URL tags that help you track where your traffic comes from. They look like this:

```
https://staging.devpartners.ru/example-company?utm_source=google&utm_medium=cpc&utm_campaign=summer_2024
```

The system captures:
- **utm_source:** Where the traffic came from (e.g., google, facebook, email)
- **utm_medium:** The type of marketing (e.g., cpc, social, email)
- **utm_campaign:** The specific campaign name
- **utm_content:** The specific ad or content (optional)
- **utm_term:** The search term (optional)

### How to Use UTM Parameters

When you run advertising campaigns, add UTM parameters to your landing page URLs:

**Example 1: Google Ads Campaign**
```
https://staging.devpartners.ru/pzs-ceo?utm_source=google&utm_medium=cpc&utm_campaign=pzs_ceo_2024
```

**Example 2: Facebook Campaign**
```
https://staging.devpartners.ru/pzs-ceo?utm_source=facebook&utm_medium=social&utm_campaign=pzs_ceo_spring
```

**Example 3: Email Newsletter**
```
https://staging.devpartners.ru/example-company?utm_source=newsletter&utm_medium=email&utm_campaign=march_2024
```

### Tracking Events

The system automatically tracks three types of events:

1.  **Page View:** When someone visits a landing page
2.  **CTA Click:** When someone clicks the main call-to-action button
3.  **Form Submission:** When someone submits the contact form

These events are stored in the browser's local storage and can be used for advanced analytics integration.

### Viewing Analytics Data

Currently, analytics data is stored in two places:

1.  **Netlify Forms Dashboard:** Shows form submissions with UTM parameters
2.  **Browser Local Storage:** Stores event data for each visitor

To view local storage data (for debugging):
1.  Open your browser's Developer Tools (F12 or Cmd+Option+I)
2.  Go to **Application** or **Storage** tab
3.  Look for **Local Storage** -> your domain
4.  Find the key **`landing_events`**
5.  You'll see all tracked events for that session

### Integrating with External Analytics

You can integrate the system with external analytics platforms like Google Analytics, Mixpanel, or Segment.

To do this, edit the file `src/utils/analytics.ts` and add your analytics code in the `logAnalyticsEvent` function. For example:

```typescript
// For Google Analytics
gtag('event', event.event_type, {
  landing_slug: event.landing_slug,
  utm_source: event.utm_params.utm_source,
  utm_medium: event.utm_params.utm_medium,
  utm_campaign: event.utm_params.utm_campaign,
});
```

---

## Form Customization

### Adding New Form Fields

To add new fields to the form, edit `src/components/Form.astro`:

1.  Add a new `<div>` block with the field:
```html
<div>
  <label for="field_name" class="block text-sm font-semibold text-gray-700 mb-2">Field Label</label>
  <input type="text" id="field_name" name="field_name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
</div>
```

2.  Commit and push to GitHub
3.  Netlify will automatically redeploy
4.  New submissions will include this field

### Making Fields Optional

By default, all fields are required. To make a field optional, remove the `required` attribute:

```html
<input type="text" id="phone" name="phone" class="..." />
```

### Changing Form Styling

The form uses Tailwind CSS classes. You can customize the appearance by editing the class names in `Form.astro`.

---

## Testing Forms

### Test Locally

1.  Run `npm run dev` in your project directory
2.  Open `http://localhost:3000/example-company`
3.  Fill out and submit the form
4.  The form will show a success message (or error if there's an issue)

### Test on Staging

1.  Make sure your changes are pushed to GitHub
2.  Netlify will automatically deploy
3.  Visit `https://staging.devpartners.ru/example-company`
4.  Fill out and submit the form
5.  Check your Netlify Forms dashboard to see the submission

### Spam Protection

Netlify Forms includes built-in spam protection. If you notice spam submissions, you can:

1.  Enable reCAPTCHA in Netlify Forms settings
2.  Add honeypot fields to the form
3.  Set up form submission rules to filter spam

---

## Best Practices

### UTM Naming Convention

Use a consistent naming convention for your UTM parameters:

- **utm_source:** `google`, `facebook`, `linkedin`, `email`, `direct`, etc.
- **utm_medium:** `cpc`, `social`, `email`, `organic`, `referral`, etc.
- **utm_campaign:** Use lowercase with underscores, e.g., `pzs_ceo_spring_2024`
- **utm_content:** Specific ad variant, e.g., `ad_v1`, `banner_blue`, etc.

### Tracking Multiple Landing Pages

If you have multiple landing pages for the same campaign, use the same UTM parameters for all of them. This allows you to track the total performance of your campaign across all pages.

### Regular Monitoring

Check your form submissions regularly:
- Daily: Monitor for high-value submissions
- Weekly: Review submission trends and sources
- Monthly: Analyze which campaigns are performing best

---

## Troubleshooting

### Forms Not Submitting

1.  Check that the form name is correct (should be `landing-{slug}`)
2.  Ensure the `netlify` attribute is present on the form element
3.  Check browser console for JavaScript errors (F12)
4.  Verify that Netlify deployment was successful

### UTM Parameters Not Captured

1.  Make sure the URL includes UTM parameters (e.g., `?utm_source=google`)
2.  Check that the parameter names are spelled correctly (lowercase)
3.  Verify that the form includes hidden input fields for UTM parameters

### Form Submissions Not Appearing

1.  Wait a few seconds after submission (sometimes there's a slight delay)
2.  Refresh the Netlify Forms dashboard
3.  Check if the submission was marked as spam
4.  Verify that email notifications are configured correctly

---

## Next Steps

1.  **Test the form** on your staging domain once DNS is updated
2.  **Set up email notifications** in Netlify to receive submission alerts
3.  **Create your first campaign** with UTM parameters
4.  **Monitor submissions** and optimize your landing pages based on data

For more information, see the [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/).
