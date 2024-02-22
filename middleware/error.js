export default function ({ error, redirect }) {
  let errorCode = "500";
  let errorTitle = "Internal Server Error";
  let errorMessage = "Oops! Something went wrong.";

  if (error.statusCode) {
    errorCode = String(error.statusCode);
    errorTitle = error.message || "Error";
    errorMessage = error.description || "Oops! Something went wrong.";
  }

  // Redirect ke halaman error dengan properti yang sesuai
  redirect(
    `/error/${errorCode}?title=${encodeURIComponent(
      errorTitle
    )}&message=${encodeURIComponent(errorMessage)}`
  );
}
