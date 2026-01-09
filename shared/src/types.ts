export type UserRole = "USER" | "ADMIN" | "SUPPORT";

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  isMfaEnabled: boolean;
  accountStatus: "ACTIVE" | "FROZEN";
  createdAt: Date;
}

export interface Transaction {
  id: string;
  senderId: string;
  recipientId: string;
  amount: number;
  currency: "USD" | "EUR" | "GBP";
  status: "PENDING" | "COMPLETED" | "FAILED";
  category: "TRANSFER" | "BILL" | "DEPOSIT";
  timestamp: string;
}
