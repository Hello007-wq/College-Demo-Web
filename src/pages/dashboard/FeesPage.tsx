import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  Download, 
//   History, 
//   DollarSign, 
  AlertCircle,
  CheckCircle2,
  Wallet
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MOCK_FEES, MOCK_STUDENT } from '@/lib/mockData';

export const FeesPage = () => {
  const currentFee = MOCK_FEES[0];
  const totalAmount = currentFee.amount;
  const paidAmount = currentFee.paid;
  const balance = totalAmount - paidAmount;
  const progress = (paidAmount / totalAmount) * 100;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold font-display">Fees & Finance</h1>
          <p className="text-muted-foreground text-sm">Manage your tuition payments and billing history.</p>
        </div>
        <Button className="h-11 px-8 gap-2 font-bold shadow-lg shadow-primary/20">
          <CreditCard className="w-4 h-4" />
          Make Online Payment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Balance Card */}
        <Card className="lg:col-span-2 border-none shadow-xl bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mb-32 -mr-32 blur-3xl" />
          <CardContent className="p-10 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 w-fit text-xs font-bold uppercase tracking-widest">
                  Term {MOCK_STUDENT.currentTerm} Tuition
                </div>
                <div className="space-y-1">
                  <p className="text-primary-foreground/70 font-medium">Outstanding Balance</p>
                  <h3 className="text-5xl md:text-6xl font-extrabold font-display tracking-tight">
                    USD ${balance.toFixed(2)}
                  </h3>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="space-y-1">
                    <p className="text-xs opacity-70">Total Billed</p>
                    <p className="font-bold">${totalAmount.toFixed(2)}</p>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="space-y-1">
                    <p className="text-xs opacity-70">Total Paid</p>
                    <p className="font-bold">${paidAmount.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto flex flex-col items-center gap-4">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle 
                      cx="64" cy="64" r="58" 
                      fill="transparent" 
                      stroke="currentColor" 
                      strokeWidth="12" 
                      className="text-white/10"
                    />
                    <circle 
                      cx="64" cy="64" r="58" 
                      fill="transparent" 
                      stroke="currentColor" 
                      strokeWidth="12" 
                      strokeDasharray={364.4}
                      strokeDashoffset={364.4 - (364.4 * progress) / 100}
                      className="text-white"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-2xl font-bold">{Math.round(progress)}%</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Paid in Full</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Info */}
        <div className="space-y-4">
          <Card className="border-none shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Wallet className="w-5 h-5 text-primary" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: 'Ecocash', limit: 'Instant' },
                { name: 'Bank Transfer', limit: '24-48 Hours' },
                { name: 'Cash (USD)', limit: 'At Accounts Office' },
              ].map(method => (
                <div key={method.name} className="flex justify-between items-center text-sm p-3 rounded-xl bg-secondary/50">
                  <span className="font-semibold">{method.name}</span>
                  <span className="text-xs text-muted-foreground">{method.limit}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/10 flex gap-4">
            <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-bold text-destructive">Deadline Warning</p>
              <p className="text-xs text-destructive/80">Clear your Term 1 balance by February 28, 2024 to avoid a 10% late payment penalty.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <Card className="border-none shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Payment History</CardTitle>
            <CardDescription>Recent transactions made on your account</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Download Statement
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="font-bold">Transaction ID</TableHead>
                <TableHead className="font-bold">Date</TableHead>
                <TableHead className="font-bold">Method</TableHead>
                <TableHead className="font-bold text-right">Amount</TableHead>
                <TableHead className="font-bold text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentFee.payments.map((payment) => (
                <TableRow key={payment.id} className="group transition-colors hover:bg-secondary/30 border-b border-border/50">
                  <TableCell className="font-mono text-xs">{payment.id.toUpperCase()}</TableCell>
                  <TableCell className="text-sm">{payment.date}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/40" />
                      <span className="text-sm">{payment.method}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-bold text-sm">USD ${payment.amount.toFixed(2)}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center">
                      <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20 shadow-none">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {currentFee.payments.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                    No payment history found for the current term.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
