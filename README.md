# VaultFlow: Secure Multi-Platform Fintech Platform

VaultFlow is a full-stack fintech ecosystem comprising a **Node.js/TypeScript** backend, a **React Native** mobile application for P2P payments, and a **React** web dashboard for advanced financial management.

## Security Architecture

With the addition of a Web Client, we implement specific browser-based security:

* **HttpOnly & Secure Cookies:** For storing Refresh Tokens on the Web to prevent XSS-based token theft.
* **CORS Policy:** Strict Whitelisting of the Web Client’s domain.
* **Content Security Policy (CSP):** To prevent malicious script injections in the browser.
* **Shared Validation:** A `/shared` directory containing `Zod` schemas used by both the Web and Mobile clients to ensure data integrity before it even hits the API.

---

## Technology Stack

* **Backend:** Node.js, Express, TypeScript, MongoDB.
* **Mobile:** React Native (Expo/CLI), TypeScript, Biometrics (FaceID/Fingerprint).
* **Web:** React 18+, TypeScript, Tailwind CSS, Recharts (for data visualization).
* **State Management:** TanStack Query (Server State) & Zustand (Client State).

---

## 💻 Web Client Functionality

The Web Client is designed for "Heavy Lifting" and administrative oversight:

1. **Financial Dashboard:** High-level visualization of spending patterns using interactive charts.
2. **Statement Exports:** Generate and download PDF/CSV transaction histories.
3. **Account Settings:** Manage security keys, MFA (Multi-Factor Authentication), and linked bank accounts.
4. **Admin Portal:** (Role-restricted) Manage user disputes, KYC verifications, and system-wide limits.

---

## API Endpoints & Contract

### 1. Authentication & Security

| Method | Endpoint | Role | Description |
| --- | --- | --- | --- |
| `POST` | `/api/v1/auth/mfa/enable` | User | Setup TOTP (Google Authenticator). |
| `POST` | `/api/v1/auth/mfa/verify` | User | Verify MFA code during login. |

### 2. Analytics (Primarily for Web)

| Method | Endpoint | Role | Description |
| --- | --- | --- | --- |
| `GET` | `/api/v1/analytics/spending` | User | Get categorized spending data for charts. |
| `GET` | `/api/v1/reports/export` | User | Trigger a PDF generation of history. |

**Web Analytics Response Example:**

```json
{
  "period": "Monthly",
  "data": [
    { "category": "Utilities", "amount": 150.00, "color": "#f87171" },
    { "category": "Leisure", "amount": 300.50, "color": "#60a5fa" }
  ]
}

```

---

## Project Structure

```text
/vaultflow
├── /backend          (Express & Node)
├── /mobile           (React Native)
├── /web              (React TS + Tailwind)
│   ├── /src
│   │   ├── /hooks    (Custom API hooks)
│   │   ├── /pages    (Dashboard, Login, Admin)
│   │   └── /components (UI Library, Charts)
└── /shared           (Shared Zod schemas & TS Interfaces)

```

---

## Setup Instructions (Web)

1. Navigate to `/web`.
2. Run `npm install`.
3. Configure `.env` with `VITE_API_BASE_URL`.
4. Run `npm run dev` to launch the dashboard on `localhost:5173`.
