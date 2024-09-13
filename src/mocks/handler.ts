import { http, HttpResponse } from "msw";


let catData = [{ type: "bank-draft", title: "Bank Draft", position: 0 },
{ type: "bill-of-lading", title: "Bill of Lading", position: 1 },
{ type: "invoice", title: "Invoice", position: 2 },
{ type: "bank-draft-2", title: "Bank Draft 2", position: 3 },
{ type: "bill-of-lading-2", title: "Bill of Lading 2", position: 4 },
];

export const handlers = [
  http.get("/api/cats", () => {
    // resolver.request
    return HttpResponse.json(catData);
  }),

  http.post('/api/cats', async({request})=>{
    const requestBody = await request.json();
    if(!requestBody) {
      return;
    }
    console.log("requestBody===:::", requestBody);

    catData = requestBody as any;

    return HttpResponse.json(catData);
  })
];
