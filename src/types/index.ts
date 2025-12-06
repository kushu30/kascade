export type PaymentMethod = 'UPI' | 'CREDIT_CARD' | 'DEBIT_CARD' | 'WALLET';

export type RailId = 'HDFC_UPI' | 'ICICI_UPI' | 'STRIPE_CARD' | 'PAYTM_WALLET';

export interface PaymentRailConfig {
  id: RailId;
  name: string;
  type: PaymentMethod;
  baseSuccessRate: number;
  costPerTx: number; 
  avgLatencyMs: number;
}

export interface Transaction {
  id: string;
  amount: number;
  timestamp: number;
  userId: string;
  isHighPriority: boolean; // e.g. Premium users get better routing
}

export interface SimulationResult {
  transactionId: string;
  selectedRail: RailId;
  success: boolean;
  latencyMs: number;
  cost: number;
  timestamp: number;
  isRetry: boolean;
}

export interface AgentMetrics {
  totalTransactions: number;
  successfulTransactions: number;
  totalCost: number;
  avgLatency: number;
  railUsage: Record<RailId, number>;
}