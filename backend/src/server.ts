/**
 * Server bootstrap.
 * Purpose: start Express app on configured port.
 */
import app from "./app.js";

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, () => {
  console.log(`[backend] listening on :${PORT}`);
});
