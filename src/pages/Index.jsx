
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const Index = () => {
  const [formData, setFormData] = useState({
    date: "08/02/2025",
    fromGodown: "LL LOGISTICS",
    serialNo: "PO/SHNT/LL LOGISTICS/2024-25/00118",
    indentReference: "IND/SHNT/LL LOGISTICS/2024-25/00123",
    department: "CIVIL",
    vendor: "ALLIED FABRICATIONS",
    tax: "CSGST",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl bg-white rounded-lg shadow-sm">
        <div className="bg-header text-header-foreground p-4 rounded-t-lg flex justify-between items-center">
          <h1 className="text-xl font-semibold">PURCHASE ORDER</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-white text-gray-700">
              PRINT
            </Button>
            <Button variant="outline" size="sm" className="bg-white text-gray-700">
              EXCEL
            </Button>
            <Button variant="outline" size="sm" className="bg-white text-gray-700">
              PDF
            </Button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">DATE:</div>
              <Input value={formData.date} readOnly className="bg-gray-50" />
              
              <div className="text-gray-600">FROM GODOWN:</div>
              <Input value={formData.fromGodown} readOnly className="bg-gray-50" />
              
              <div className="text-gray-600">SERIAL NO:</div>
              <Input value={formData.serialNo} readOnly className="bg-gray-50" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">INDENT REFERENCE:</div>
              <Input value={formData.indentReference} readOnly className="bg-gray-50" />
              
              <div className="text-gray-600">DEPARTMENT:</div>
              <Input value={formData.department} readOnly className="bg-gray-50" />
              
              <div className="text-gray-600">VENDOR:</div>
              <Input value={formData.vendor} readOnly className="bg-gray-50" />
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-header text-header-foreground p-2 font-semibold">
              ITEMS
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-table-header">
                    <th className="border p-2 text-left">S No</th>
                    <th className="border p-2 text-left">REF ITEM</th>
                    <th className="border p-2 text-left">ITEM</th>
                    <th className="border p-2 text-left">DESCRIPTION</th>
                    <th className="border p-2 text-left">UNIT</th>
                    <th className="border p-2 text-left">RATE</th>
                    <th className="border p-2 text-left">QTY</th>
                    <th className="border p-2 text-left">DIS(%)</th>
                    <th className="border p-2 text-left">DIS AMT</th>
                    <th className="border p-2 text-left">TOT AMT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">1</td>
                    <td className="border p-2">IND/SHNT/LL LOGISTICS/2024-25/00123 - 30/12/2024</td>
                    <td className="border p-2">MS GATE 20' LENGTH X 8' HEIGHT</td>
                    <td className="border p-2">MS GATE FOR ENTRANCE SAZE-SIZE- 20'X8', 19.8'X8', 13'X8' TOTAL - 3 NOS MAKE-MS & GI</td>
                    <td className="border p-2">KG</td>
                    <td className="border p-2">95.00</td>
                    <td className="border p-2">1100.000</td>
                    <td className="border p-2">0.00</td>
                    <td className="border p-2">0.00</td>
                    <td className="border p-2">123310.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <div className="bg-header text-header-foreground p-2 font-semibold">
                ADVANCES
              </div>
              <div className="grid grid-cols-2 gap-4 p-4 border">
                <div className="text-gray-600">ADVANCE 1:</div>
                <div>Advance against Purchase Order</div>
                <div className="text-gray-600">ADVANCE AMOUNT:</div>
                <div>0.00</div>
                <div className="text-gray-600">ADVANCE %:</div>
                <div>30.00</div>
              </div>
            </div>

            <div>
              <div className="bg-header text-header-foreground p-2 font-semibold">
                TOTAL
              </div>
              <div className="grid grid-cols-2 gap-4 p-4 border">
                <div className="text-gray-600">PARTY NET AMT:</div>
                <div>104500.00</div>
                <div className="text-gray-600">TOTAL TAX AMOUNT:</div>
                <div>18810.00</div>
                <div className="text-gray-600">FINAL AMOUNT:</div>
                <div>123310.00</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-header text-header-foreground p-2 font-semibold">
              TERMS AND CONDITIONS
            </div>
            <div className="p-4 border">
              <ol className="list-decimal ml-4 space-y-2">
                <li>DELIVERY ADDRESS: LL LOGISTIC PVT.LTD.Near R I office Chandaka khordha road Village - Chhatabar ,Tahsil-Jatani,Dist- Khordha ,BHUBANESHWAR (Odisha).</li>
                <li>CONTACT PERSON: MR.VINOD SAHU 8770593884 , RANJAN ROUT JI 6371443386</li>
                <li>TERMS OF PAYMENT: 30% ADVANCE AGAINST PO & 70% REST AMOUNT AFTER WORK COMPLETION AT SITE</li>
                <li>PRICE BASIS: EX SHOP</li>
                <li>DELIVERY: READY STOCK</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
