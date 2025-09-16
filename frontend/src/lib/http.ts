// frontend/src/lib/http.ts

import axios from "axios";

/**
 * Axios instance configured for proxy-based API requests
 *
 * - This is used to call backend and python services
 * - All API paths should start with `/backend` or `/python`
 */

export const http = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
