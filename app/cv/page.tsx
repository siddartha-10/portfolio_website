import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CV() {
  const router = useRouter();

  useEffect(() => {
    // Replace with your Google Drive CV link
    const googleDriveLink = "https://drive.google.com/file/d/1ZeEP0oP7Fm_ZcE4wYwf8H4AX8fIxlBlv/view?usp=sharing";
    // Redirect to the Google Drive link
    window.location.href = googleDriveLink;
  }, [router]);

  return null; // No content will be rendered on this page
}
