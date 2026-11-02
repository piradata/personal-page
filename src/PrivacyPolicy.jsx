const css = `
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6;
  max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
  h1, h2 { color: #111; }
  code { background: #f4f4f4; padding: 2px 5px; border-radius: 3px; }
  .highlight { background-color: #f9f9f9; border-left: 4px solid #0284c7; padding: 15px; margin: 20px 0; }
`;

export default function PrivacyPolicy() {
  return (
    <>
      <style>{css}</style>

      <h1>Privacy Policy for PiraData Studio Tools</h1>
      <p><strong>Last updated:</strong> November 1, 2026</p>

      <p>This Privacy Policy describes how <strong>PiraData Studio Tools</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;the application&quot;) handles information
      when you use our internal video production and publishing automation workflow.</p>

      <h2>1. Information We Access and Collect</h2>
      <p>PiraData Studio Tools integrates with Google and YouTube APIs to automate video management and publishing for authorized channels.
      Through Google OAuth 2.0, the application may access:</p>
      <ul>
        <li><strong>YouTube Account &amp; Channel Information:</strong> Channel ID, channel title, custom handle, and subscriber statistics
        (read-only) to verify account ownership.</li>
        <li><strong>Video Content &amp; Metadata:</strong> Video files, titles, descriptions, tags, category IDs, and thumbnails provided by
        the user for upload.</li>
        <li><strong>Authentication Credentials:</strong> OAuth access tokens and refresh tokens necessary to authenticate requests to the
        YouTube Data API.</li>
      </ul>

      <h2>2. How We Use the Information</h2>
      <p>The information accessed by PiraData Studio Tools is strictly used for the following operational purposes:</p>
      <ul>
        <li>Authenticating the channel owner prior to video staging.</li>
        <li>Uploading video files as Private or Unlisted to the user&apos;s designated YouTube channel.</li>
        <li>Setting video metadata (titles, descriptions, timestamps, tags, thumbnails) according to user configuration.</li>
      </ul>
      <p>We do not use your information for advertising, profiling, tracking, or marketing purposes.</p>

      <h2>3. Data Storage and Security</h2>
      <p>All authentication tokens (access tokens and refresh tokens) and application secrets are stored locally on the user&apos;s private,
      encrypted machine. <strong>No user credentials, tokens, or video data are transmitted to external servers, cloud databases, or
      third-party storage.</strong></p>

      <h2>4. Data Sharing and Third-Party Disclosures</h2>
      <p>We do not sell, rent, trade, or transfer any user data to third parties. Information is communicated solely between the local
      application client and the official Google YouTube API servers.</p>

      <h2>5. Google API Services User Data Policy Disclosure (Limited Use)</h2>
      <div className="highlight">
        <p><strong>PiraData Studio Tools&apos; use and transfer to any other app of information received from Google APIs will adhere to the <a
        href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User
        Data Policy</a>, including the Limited Use requirements.</strong></p>
      </div>
      <p>Our application also utilizes YouTube API Services. By using this application, users agree to be bound by the <a
      href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a> and the <a
      href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</p>

      <h2>6. User Control and Data Revocation</h2>
      <p>Users can revoke the application&apos;s access to their Google account at any time through the Google Security Settings page at: <a
      href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">https://myaccount.google.com/permissions</a>.</p>
      <p>To delete local tokens, simply remove the local <code>tokens/</code> directory from the installation.</p>

      <h2>7. Contact Information</h2>
      <p>If you have any questions about this Privacy Policy or the security of the application, please contact us at:</p>
      <p><strong>Email:</strong> contact@piradata.dev<br />
      <strong>Website:</strong> <a href="https://piradata.dev">https://piradata.dev</a></p>
    </>
  );
}
