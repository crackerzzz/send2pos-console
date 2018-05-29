const DummyData = (i) => {
    return {
        id: i,
        country: 'AUS' + i,
        storeNo: '70' + i,
        brand: i + '01',
        franchiseCode: '6376' + i,
        franchiseChannel: '5815B283-C0D8-244E-971C-2FDEAEA85864',
        clientId: 'Brightside',
        customerName: 'John Smith',
        orderNumber: 'PO-BS-000000274' + i,
        date: '2018-03-05 16:17:51.727',
        status: 'COMPLETED',
        request: '{ "meta": { "referenceId": "78598100-2034-11e8-9315-02f4467e483e", "timestamp": 1520227037, "requestor": { "techChannel": "819a3d9d-106e-4368-bf74-8f87b875df84" } }, "order": { "source": "ICFR", "referenceId": "78598100-2034-11e8-9315-02f4467e483e", "dateTime": "2018-03-05T05:17:17Z", "number": "PO-BS-000000274", "totalItems": 1, "totalPrice": 50000, "isTaxIncluded": true, "deliveryFee": 0, "shippingType": "DELIVERY", "taxCode": "GST", "currencyCode": "AUD", "traits": [{ "key": "APPROVAL_NUMBER", "value": "EPC18000391" }, { "key": "APPROVAL_AMOUNT", "value": "50000" }], "items": [{ "stockKeepingUnit": { "skuId": "CG302DNGGB1", "skuType": "VENDOR" }, "description": "Fisher and Paykel CG302DNGGB1", "currencyCode": "AUD", "taxCode": "GST", "isTaxIncluded": true, "price": 50000, "quantity": 1, "deliveryFee": 0, "shippingType": "DELIVERY", "department": "070", "traits": [{ "key": "BONUS", "value": "NO" }] }] }, "actor": { "seller": { "country": "AUS", "brand": "01", "store": "72", "franchiseChannel": "83b21558-d8c0-4e24-971c-2fdeaea85864", "franchise": "63760" }, "person": [{ "personType": "CUSTOMER", "givenName": "PCASA", "familyName": "Pty Ltd", "contactPoint": { "addressContactPoint": { "number": "-", "name": "34 - 36 Brookhollow Avenue", "locality": "Baulkham Hills", "region": "NSW", "country": "AUS", "postalCode": "2153" } }, "communicationPoint": { "emailCommunicationPoint": { "language": "EN", "email": "info@brightsideco.com.au", "isPrefered": false }, "phoneCommunicationPoint": { "language": "EN", "number": { "unstructuredNumber": "1300880459" } } } }, { "personType": "DELIVERY", "givenName": "Jason", "familyName": "Jones", "contactPoint": { "addressContactPoint": { "number": "-", "name": "34 - 36 Brookhollow Ave", "locality": "BAULKHAM HILLS", "region": "NSW", "country": "AUS", "postalCode": "2153" } }, "communicationPoint": { "emailCommunicationPoint": { "language": "EN", "email": "no-email-address-present@brightsideco.com.au", "isPrefered": false }, "phoneCommunicationPoint": { "language": "EN", "number": { "unstructuredNumber": "0212341234" } } } }, { "personType": "BILLING", "givenName": "PCASA", "familyName": "Pty Ltd", "contactPoint": { "addressContactPoint": { "number": "-", "name": "34 - 36 Brookhollow Avenue", "locality": "Baulkham Hills", "region": "NSW", "country": "AUS", "postalCode": "2153" } }, "communicationPoint": { "emailCommunicationPoint": { "language": "EN", "email": "info@brightsideco.com.au", "isPrefered": false }, "phoneCommunicationPoint": { "language": "EN", "number": { "unstructuredNumber": "1300880459" } } } }] } }',
        response: '{ "meta": { "timestamp": 1520472945327, "referenceId": "95a2f854-df92-432d-8974-5d92eb32ca14", "responder": { "techChannel": "12345678-106e-4368-bf74-8f87b875df84" } }, "response": { "respondingTo": "83093994-f43c-42b5-9218-6ab961720e9b", "statusCode": 400, "statusId": 1, "traits": [], "message": "Amount mismatch between APPROVAL_AMOUNT and order total + delivery fee - APPROVAL_AMOUNT: 600.00, order total + delivery fee: 400.00" } }',
    };
}
const SearchService = (params) => {
    return (
        [...Array(100000).keys()].map(i => DummyData(i))
    );
}

export default SearchService;