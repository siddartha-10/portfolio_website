import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CV() {
  const router = useRouter();

  useEffect(() => {
    // Replace with your Google Drive CV link
    const googleDriveLink = 'https://drive.google.com/your-cv-link';
    // Redirect to the Google Drive link
    window.location.href = googleDriveLink;
  }, [router]);

  return null; // No content will be rendered on this page
}
