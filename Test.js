var j193 = [
  {
    "from": {
      "jsonPath": "lineDetails.buyerItemNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "buyerItemNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.buyerItemNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "buyerItemNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.supplierItemNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "supplierItemNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.supplierItemNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "supplierItemNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.uom.standardCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "standardCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.uom.standardCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "standardCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.uom.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.uom.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.uom.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.uom.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.uom.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.uom.uomType",
      "nodeType": 1,
      "dataType": "string",
      "name": "uomType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.contractSubType.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.itemSource.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.contractSubType.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.itemSource.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.contractSubType.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.itemSource.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.contractSubType.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.itemSource.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentName",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentDocumentDetails.fulfillmentDocumentName",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentDocumentDetails.fulfillmentDocumentId",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "orgEntities.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "orgEntities.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "orgEntities.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "legalTerm.paymentTerm.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.paymentTerms.paymentTermName",
      "nodeType": 1,
      "dataType": "string",
      "name": "paymentTermName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "legalTerm.paymentTerm.code",
      "nodeType": 1,
      "dataType": "string",
      "name": "code",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.paymentTerms.paymentTermCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "paymentTermCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.lineItemNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineItemNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.lineItemNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineItemNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentName",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.documentName",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.fulfillmentDocumentLineDetailsId",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentLineDetailsId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.lineDetailsId",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineDetailsId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.documentId",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "subtypeappid",
      "nodeType": 1,
      "dataType": "string",
      "name": "subtypeappid",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentDocumentDetails.fulfillmentDocumentSubTypeAppId",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentSubTypeAppId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "subtypeappversion",
      "nodeType": 1,
      "dataType": "string",
      "name": "subtypeappversion",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentDocumentDetails.fulfillmentDocumentSubType",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentSubType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "subtypeappid",
      "nodeType": 1,
      "dataType": "string",
      "name": "subtypeappid",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "subTypeAppId",
      "nodeType": 1,
      "dataType": "string",
      "name": "subTypeAppId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "subtypeappid",
      "nodeType": 1,
      "dataType": "string",
      "name": "subtypeappid",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentOrderDetails.fulfillmentDocumentSubTypeAppId",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentSubTypeAppId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "subtypeappid",
      "nodeType": 1,
      "dataType": "string",
      "name": "subtypeappid",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentInvoiceDetails.fulfillmentDocumentSubTypeAppId",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentSubTypeAppId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "subtypeappid",
      "nodeType": 1,
      "dataType": "string",
      "name": "subtypeappid",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentCustomerInvoiceDetails.fulfillmentDocumentSubTypeAppId",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentSubTypeAppId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "subtypeappid",
      "nodeType": 1,
      "dataType": "string",
      "name": "subtypeappid",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.subTypeAppId",
      "nodeType": 1,
      "dataType": "string",
      "name": "subTypeAppId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"10\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"10\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"10\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "fulfillmentDocumentLineDetails",
        "fulfillmentDocumentType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.fulfillmentDocumentType",
      "name": "fulfillmentDocumentType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "subtypeappid",
      "nodeType": 1,
      "dataType": "string",
      "name": "subtypeappid",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.fulfillmentDocumentSubTypeAppId",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentSubTypeAppId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "subtypeappversion",
      "nodeType": 1,
      "dataType": "string",
      "name": "subtypeappversion",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.fulfillmentDocumentSubType",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentSubType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"1\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"1\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"1\""
      ]
    },
    "to": {
      "path": [
        "invoiceStatus",
        "documentStatus"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceStatus.documentStatus",
      "name": "documentStatus"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"10\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"10\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"10\""
      ]
    },
    "to": {
      "path": [
        "fulfillmentDocumentDetails",
        "fulfillmentDocumentType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "fulfillmentDocumentDetails.fulfillmentDocumentType",
      "name": "fulfillmentDocumentType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"10\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"10\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"10\""
      ]
    },
    "to": {
      "path": [
        "fulfillmentOrderDetails",
        "fulfillmentDocumentType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "fulfillmentOrderDetails.fulfillmentDocumentType",
      "name": "fulfillmentDocumentType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"10\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"10\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"10\""
      ]
    },
    "to": {
      "path": [
        "fulfillmentInvoiceDetails",
        "fulfillmentDocumentType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "fulfillmentInvoiceDetails.fulfillmentDocumentType",
      "name": "fulfillmentDocumentType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"10\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"10\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"10\""
      ]
    },
    "to": {
      "path": [
        "fulfillmentCustomerInvoiceDetails",
        "fulfillmentDocumentType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "fulfillmentCustomerInvoiceDetails.fulfillmentDocumentType",
      "name": "fulfillmentDocumentType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"10\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"10\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"10\""
      ]
    },
    "to": {
      "path": [
        "fulfillmentAsnDetails",
        "fulfillmentDocumentType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "fulfillmentAsnDetails.fulfillmentDocumentType",
      "name": "fulfillmentDocumentType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"10\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"10\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"10\""
      ]
    },
    "to": {
      "path": [
        "roOrderDetails",
        "fulfillmentDocumentType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "roOrderDetails.fulfillmentDocumentType",
      "name": "fulfillmentDocumentType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"10\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"10\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"10\""
      ]
    },
    "to": {
      "path": [
        "fulfillmentServiceConfirmationDetails",
        "fulfillmentDocumentType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "fulfillmentServiceConfirmationDetails.fulfillmentDocumentType",
      "name": "fulfillmentDocumentType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "legalTerm.paymentTerm.dueDays",
      "nodeType": 1,
      "dataType": "number",
      "name": "dueDays",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.paymentTerms.noOfDays",
      "nodeType": 1,
      "dataType": "number",
      "name": "noOfDays",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "legalTerm.paymentTerm.discountDays",
      "nodeType": 1,
      "dataType": "number",
      "name": "discountDays",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.paymentTerms.discountDays",
      "nodeType": 1,
      "dataType": "number",
      "name": "discountDays",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "bpc",
      "nodeType": 1,
      "dataType": "number",
      "name": "bpc",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "bpc",
      "nodeType": 1,
      "dataType": "number",
      "name": "bpc",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.bpc",
      "nodeType": 1,
      "dataType": "number",
      "name": "bpc",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.bpc",
      "nodeType": 1,
      "dataType": "number",
      "name": "bpc",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.bpc",
      "nodeType": 1,
      "dataType": "number",
      "name": "bpc",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.bpc",
      "nodeType": 1,
      "dataType": "number",
      "name": "bpc",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentDocumentDetails.fulfillmentUniqueReferenceNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentUniqueReferenceNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentOrderDetails.fulfillmentUniqueReferenceNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentUniqueReferenceNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentInvoiceDetails.fulfillmentUniqueReferenceNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentUniqueReferenceNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentCustomerInvoiceDetails.fulfillmentUniqueReferenceNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentUniqueReferenceNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.fulfillmentUniqueReferenceNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentUniqueReferenceNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentAsnDetails.fulfillmentUniqueReferenceNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentUniqueReferenceNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "roOrderDetails.fulfillmentUniqueReferenceNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentUniqueReferenceNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentServiceConfirmationDetails.fulfillmentUniqueReferenceNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentUniqueReferenceNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"3\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"3\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"3\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "stakeholderType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.stakeholderType",
      "name": "stakeholderType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"1\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"1\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"1\""
      ]
    },
    "to": {
      "path": [
        "relatedDocumentDetails",
        "invoiceStatus",
        "documentStatus"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "relatedDocumentDetails.invoiceStatus.documentStatus",
      "name": "documentStatus"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "interfaceStatus",
        "status"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "interfaceStatus.status",
      "name": "status"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"1\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"1\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"1\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "matchType",
        "matchTypes"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.matchType.matchTypes",
      "name": "matchTypes"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "legalTerm.contractValue.value",
      "nodeType": 1,
      "dataType": "number",
      "name": "value",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.contract.contractValue",
      "nodeType": 1,
      "dataType": "number",
      "name": "contractValue",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentName",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.contract.contractName",
      "nodeType": 1,
      "dataType": "string",
      "name": "contractName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.contract.contractNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "contractNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "itemStatus",
        "itemStatusType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.itemStatus.itemStatusType",
      "name": "itemStatusType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "stakeholdersId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.stakeholdersId",
      "name": "stakeholdersId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "lineDetails.currency.code",
      "nodeType": 1,
      "dataType": "string",
      "name": "code",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.bankingInfo.currencyCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "currencyCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "paymentDetails",
        "invoiceCreditMemoDetails",
        "currency",
        "id"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "paymentDetails.invoiceCreditMemoDetails.currency.id",
      "name": "id"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "lineDetails.currency.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "paymentDetails.invoiceCreditMemoDetails.currency.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.currency.countryCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "countryCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "paymentDetails.invoiceCreditMemoDetails.currency.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.currency.code",
      "nodeType": 1,
      "dataType": "string",
      "name": "code",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "paymentDetails.invoiceCreditMemoDetails.currency.code",
      "nodeType": 1,
      "dataType": "string",
      "name": "code",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.currency.symbol",
      "nodeType": 1,
      "dataType": "string",
      "name": "symbol",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "paymentDetails.invoiceCreditMemoDetails.currency.symbol",
      "nodeType": 1,
      "dataType": "string",
      "name": "symbol",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.uom.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.uom.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "orgEntities.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "legalTerm.paymentTerm.discountPercentage",
      "nodeType": 1,
      "dataType": "number",
      "name": "discountPercentage",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.paymentTerms.discount",
      "nodeType": 1,
      "dataType": "number",
      "name": "discount",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"1\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"1\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"1\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "paymentDeliveryDetails",
        "paymentTerms",
        "paymentTermId"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.paymentTerms.paymentTermId",
      "name": "paymentTermId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "legalTerm.currency.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.currency.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "legalTerm.currency.code",
      "nodeType": 1,
      "dataType": "string",
      "name": "code",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.currency.code",
      "nodeType": 1,
      "dataType": "string",
      "name": "code",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"2\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"2\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Billing\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Billing\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Leasing\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Leasing\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceType",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceType.name",
      "name": "name"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "paymentDeliveryDetails",
        "shipTo",
        "address",
        "addressCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.shipTo.address.addressCode",
      "name": "addressCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "paymentDeliveryDetails",
        "shipFrom",
        "address",
        "addressCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.shipFrom.address.addressCode",
      "name": "addressCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "paymentDeliveryDetails",
        "shipFrom",
        "address",
        "countryInfo",
        "countryId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.shipFrom.address.countryInfo.countryId",
      "name": "countryId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "remittoLocation",
        "locationId"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.remittoLocation.locationId",
      "name": "locationId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "remittoLocation",
        "leoLocationId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.remittoLocation.leoLocationId",
      "name": "leoLocationId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "remittoLocation",
        "address",
        "addressCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.remittoLocation.address.addressCode",
      "name": "addressCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "remittoLocation",
        "address",
        "countryInfo",
        "countryId"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.remittoLocation.address.countryInfo.countryId",
      "name": "countryId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "locationId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.locationId",
      "name": "locationId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "leoLocationId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.leoLocationId",
      "name": "leoLocationId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "countryInfo",
        "countryId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.countryInfo.countryId",
      "name": "countryId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderContact",
        "proxyContactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderContact.proxyContactCode",
      "name": "proxyContactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderContact",
        "partnerCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderContact.partnerCode",
      "name": "partnerCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"false\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"false\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"false\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderContact",
        "isPrimary"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderContact.isPrimary",
      "name": "isPrimary"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "proxyContactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.proxyContactCode",
      "name": "proxyContactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "partnerCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.partnerCode",
      "name": "partnerCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"false\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"false\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"false\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "isPrimary"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.isPrimary",
      "name": "isPrimary"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "createdBy",
        "contactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "createdBy.contactCode",
      "name": "contactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "modifiedBy",
        "contactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "modifiedBy.contactCode",
      "name": "contactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"2\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"2\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"7\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"7\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"8\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"8\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceType",
        "invoiceTypes"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceType.invoiceTypes",
      "name": "invoiceTypes"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "documentLOB",
        "level"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "documentLOB.level",
      "name": "level"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "invoiceAmount"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.invoiceAmount",
      "name": "invoiceAmount"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "taxInLocalCurrency"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.taxInLocalCurrency",
      "name": "taxInLocalCurrency"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "totalAmountInLocalCurrency"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.totalAmountInLocalCurrency",
      "name": "totalAmountInLocalCurrency"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "taxableValueInLocalCurrency"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.taxableValueInLocalCurrency",
      "name": "taxableValueInLocalCurrency"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "paymentDeliveryDetails",
        "billTo",
        "address",
        "countryInfo",
        "countryId"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.billTo.address.countryInfo.countryId",
      "name": "countryId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "paymentDeliveryDetails",
        "billTo",
        "address",
        "addressCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.billTo.address.addressCode",
      "name": "addressCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "paymentDeliveryDetails",
        "shipTo",
        "address",
        "countryInfo",
        "countryId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.paymentDeliveryDetails.shipTo.address.countryInfo.countryId",
      "name": "countryId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "remittoLocation",
        "locationCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.remittoLocation.locationCode",
      "name": "locationCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "partnerCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.partnerCode",
      "name": "partnerCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "proxyContactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.proxyContactCode",
      "name": "proxyContactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"false\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"false\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"false\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "isPrimary"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.isPrimary",
      "name": "isPrimary"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplier",
        "id"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplier.id",
      "name": "id"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "stakeholdersId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.stakeholdersId",
      "name": "stakeholdersId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "taxes"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.taxes",
      "name": "taxes"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "taxBase"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.taxBase",
      "name": "taxBase"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "shippingCharges"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.shippingCharges",
      "name": "shippingCharges"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierUnitPrice"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierUnitPrice",
      "name": "supplierUnitPrice"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "markUp"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.markUp",
      "name": "markUp"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitType",
      "name": "splitType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "lineDetails.unitPrice",
      "nodeType": 1,
      "dataType": "number",
      "name": "unitPrice",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.unRoundedUnitPrice",
      "nodeType": 1,
      "dataType": "number",
      "name": "unRoundedUnitPrice",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "uom",
        "decimalPrecision"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.uom.decimalPrecision",
      "name": "decimalPrecision"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "itemSource",
        "itemSourceType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.itemSource.itemSourceType",
      "name": "itemSourceType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "proxyContactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.proxyContactCode",
      "name": "proxyContactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "partnerCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.partnerCode",
      "name": "partnerCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"false\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"false\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"false\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "isPrimary"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.isPrimary",
      "name": "isPrimary"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderContact",
        "partnerCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderContact.partnerCode",
      "name": "partnerCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderContact",
        "proxyContactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderContact.proxyContactCode",
      "name": "proxyContactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderContact",
        "contactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderContact.contactCode",
      "name": "contactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"false\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"false\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"false\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderContact",
        "isPrimary"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderContact.isPrimary",
      "name": "isPrimary"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderContact",
        "stakeholdersId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderContact.stakeholdersId",
      "name": "stakeholdersId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "locationId"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.locationId",
      "name": "locationId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "addressCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.addressCode",
      "name": "addressCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "countryInfo",
        "countryId"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.countryInfo.countryId",
      "name": "countryId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "shipFromLocation",
        "id"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.shipFromLocation.id",
      "name": "id"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "shipFromLocation",
        "address",
        "addressCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.shipFromLocation.address.addressCode",
      "name": "addressCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "shipFromLocation",
        "address",
        "countryInfo",
        "countryId"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.shipFromLocation.address.countryInfo.countryId",
      "name": "countryId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "shipTo",
        "id"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.shipTo.id",
      "name": "id"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "shipTo",
        "address",
        "addressCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.shipTo.address.addressCode",
      "name": "addressCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "shipTo",
        "address",
        "countryInfo",
        "countryId"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.shipTo.address.countryInfo.countryId",
      "name": "countryId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "taxes"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.taxes",
      "name": "taxes"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "otherCharges"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.otherCharges",
      "name": "otherCharges"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "shippingCharges"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.shippingCharges",
      "name": "shippingCharges"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"false\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"false\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"false\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "isDeleted"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.isDeleted",
      "name": "isDeleted"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "requester",
        "stakeholdersId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.requester.stakeholdersId",
      "name": "stakeholdersId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "requester",
        "stakeholderType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.requester.stakeholderType",
      "name": "stakeholderType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "requester",
        "proxyContactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.requester.proxyContactCode",
      "name": "proxyContactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "requester",
        "partnerCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.requester.partnerCode",
      "name": "partnerCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "requester",
        "contactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.requester.contactCode",
      "name": "contactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"false\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"false\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"false\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "requester",
        "isPrimary"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.requester.isPrimary",
      "name": "isPrimary"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "lineDetails.lineNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.lineNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.entityId",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.entityId",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.entityDetailName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.entityDetailName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.parentDetails.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.parentDetails.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.parentDetails",
      "nodeType": 2,
      "dataType": "string",
      "name": "parentDetails",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.parentDetails",
      "nodeType": 2,
      "dataType": "string",
      "name": "parentDetails",
      "defaultValue": ""
    },
    "mappingType": "for-each"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.parentDetails.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.parentDetails.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.eRPType.parentDetails.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.eRPType.parentDetails.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.itemDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "itemDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.itemDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "itemDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.commodityCode.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.commodityCode.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.commodityCode.code",
      "nodeType": 1,
      "dataType": "string",
      "name": "code",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.commodityCode.code",
      "nodeType": 1,
      "dataType": "string",
      "name": "code",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.commodityCode.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.commodityCode.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.commodityCode.description",
      "nodeType": 1,
      "dataType": "string",
      "name": "description",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.commodityCode.description",
      "nodeType": 1,
      "dataType": "string",
      "name": "description",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.commodityCode.codeType",
      "nodeType": 1,
      "dataType": "string",
      "name": "codeType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.commodityCode.codeType",
      "nodeType": 1,
      "dataType": "string",
      "name": "codeType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.companyCode.code",
      "nodeType": 1,
      "dataType": "string",
      "name": "code",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.companyCode.code",
      "nodeType": 1,
      "dataType": "string",
      "name": "code",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.companyCode.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.companyCode.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.unitOfMeasure.allowDecimal",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "allowDecimal",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.unitOfMeasure.allowDecimal",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "allowDecimal",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.unitOfMeasure.standardCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "standardCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.unitOfMeasure.standardCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "standardCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.unitOfMeasure.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.unitOfMeasure.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.unitOfMeasure.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.unitOfMeasure.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.unitOfMeasure.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.unitOfMeasure.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.unitOfMeasure.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.unitOfMeasure.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.unitOfMeasure.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.unitOfMeasure.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.lineType.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.lineType.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.lineType.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.lineType.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.lineType.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.lineType.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.productionLocation.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.productionLocation.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.serviceLocation.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.serviceLocation.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolverType.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolverType.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolverType.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolverType.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.buyerPartnerName",
      "nodeType": 1,
      "dataType": "string",
      "name": "buyerPartnerName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.buyerPartnerName",
      "nodeType": 1,
      "dataType": "string",
      "name": "buyerPartnerName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.clientContactCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "clientContactCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.clientContactCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "clientContactCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.contactCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "contactCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.contactCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "contactCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.fullName",
      "nodeType": 1,
      "dataType": "string",
      "name": "fullName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.fullName",
      "nodeType": 1,
      "dataType": "string",
      "name": "fullName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.groupId",
      "nodeType": 1,
      "dataType": "number",
      "name": "groupId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.groupId",
      "nodeType": 1,
      "dataType": "number",
      "name": "groupId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.groupName",
      "nodeType": 1,
      "dataType": "string",
      "name": "groupName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.groupName",
      "nodeType": 1,
      "dataType": "string",
      "name": "groupName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.lastName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lastName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.lastName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lastName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.userId",
      "nodeType": 1,
      "dataType": "number",
      "name": "userId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.userId",
      "nodeType": 1,
      "dataType": "number",
      "name": "userId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolvers.viewer",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "viewer",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolvers.viewer",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "viewer",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolversGroup.groupName",
      "nodeType": 1,
      "dataType": "string",
      "name": "groupName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolversGroup.groupName",
      "nodeType": 1,
      "dataType": "string",
      "name": "groupName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolversGroup.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolversGroup.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolversGroup.emailAddress",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailAddress",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolversGroup.emailAddress",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailAddress",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolversGroup.isSelected",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isSelected",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolversGroup.isSelected",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isSelected",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolversGroup.groupId",
      "nodeType": 1,
      "dataType": "number",
      "name": "groupId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolversGroup.groupId",
      "nodeType": 1,
      "dataType": "number",
      "name": "groupId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.exceptionResolversGroup.totalRecords",
      "nodeType": 1,
      "dataType": "number",
      "name": "totalRecords",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.exceptionResolversGroup.totalRecords",
      "nodeType": 1,
      "dataType": "number",
      "name": "totalRecords",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovalRequired.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovalRequired.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovalRequired.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovalRequired.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApproverType.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApproverType.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApproverType.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApproverType.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApproversGroup.groupName",
      "nodeType": 1,
      "dataType": "string",
      "name": "groupName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApproversGroup.groupName",
      "nodeType": 1,
      "dataType": "string",
      "name": "groupName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApproversGroup.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApproversGroup.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApproversGroup.emailAddress",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailAddress",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApproversGroup.emailAddress",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailAddress",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApproversGroup.isSelected",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isSelected",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApproversGroup.isSelected",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isSelected",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApproversGroup.groupId",
      "nodeType": 1,
      "dataType": "number",
      "name": "groupId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApproversGroup.groupId",
      "nodeType": 1,
      "dataType": "number",
      "name": "groupId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApproversGroup.totalRecords",
      "nodeType": 1,
      "dataType": "number",
      "name": "totalRecords",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApproversGroup.totalRecords",
      "nodeType": 1,
      "dataType": "number",
      "name": "totalRecords",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.buyerPartnerName",
      "nodeType": 1,
      "dataType": "string",
      "name": "buyerPartnerName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.buyerPartnerName",
      "nodeType": 1,
      "dataType": "string",
      "name": "buyerPartnerName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.clientContactCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "clientContactCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.clientContactCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "clientContactCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.contactCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "contactCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.contactCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "contactCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.fullName",
      "nodeType": 1,
      "dataType": "string",
      "name": "fullName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.fullName",
      "nodeType": 1,
      "dataType": "string",
      "name": "fullName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.groupId",
      "nodeType": 1,
      "dataType": "number",
      "name": "groupId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.groupId",
      "nodeType": 1,
      "dataType": "number",
      "name": "groupId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.groupName",
      "nodeType": 1,
      "dataType": "string",
      "name": "groupName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.groupName",
      "nodeType": 1,
      "dataType": "string",
      "name": "groupName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.lastName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lastName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.lastName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lastName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.userId",
      "nodeType": 1,
      "dataType": "number",
      "name": "userId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.userId",
      "nodeType": 1,
      "dataType": "number",
      "name": "userId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.invoiceApprovers.viewer",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "viewer",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceApprovers.viewer",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "viewer",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.taxTolerance",
      "nodeType": 1,
      "dataType": "number",
      "name": "taxTolerance",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.taxTolerance",
      "nodeType": 1,
      "dataType": "number",
      "name": "taxTolerance",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "orgEntities.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities.entityId",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "10",
      "nodeType": 1,
      "dataType": "string",
      "name": "10",
      "defaultValue": "",
      "path": [
        "10"
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "customAttributes",
        "tolerancePeriod"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.customAttributes.tolerancePeriod",
      "name": "tolerancePeriod"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "orgEntities.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": "",
      "path": [
        "orgEntities",
        "lobCode"
      ],
      "fromPathReplacement": "orgEntities[0].lobCode"
    },
    "to": {
      "path": [
        "documentLOB",
        "entityCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "documentLOB.entityCode",
      "name": "entityCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "lineDetails.lineNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.lineNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.fullNameAndEmailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "fullNameAndEmailId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.stakeholders.emailAndPhoneNo",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailAndPhoneNo",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApprovalRequired.id",
                "nodeType": 1,
                "dataType": "string",
                "name": "id",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApprovalRequired",
                  "id"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"1\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"1\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"true\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"true\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApprovalRequired.id",
                "nodeType": 1,
                "dataType": "string",
                "name": "id",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApprovalRequired",
                  "id"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"2\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"2\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"false\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"false\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"false\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"false\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceApprovalRequired"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "invoiceApprovalRequired",
      "name": "invoiceApprovalRequired"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "uom",
        "id"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.uom.id",
      "name": "id"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.contactCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "contactCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orderContact.contactCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "contactCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orderContact.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.lastName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lastName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orderContact.lastName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lastName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.fullName",
      "nodeType": 1,
      "dataType": "string",
      "name": "fullName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orderContact.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orderContact.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.fullNameAndEmailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "fullNameAndEmailId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orderContact.emailAndPhoneNo",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailAndPhoneNo",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.clientContactCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "clientContactCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orderContact.clientContactCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "clientContactCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"2\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"2\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"2\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderContact",
        "stakeholderType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderContact.stakeholderType",
      "name": "stakeholderType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderContact",
        "stakeholdersId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderContact.stakeholdersId",
      "name": "stakeholdersId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "customAttributes.sourceCode.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.sourceCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "sourceCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"EA\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"EA\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"EA\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "customAttributes",
        "unitOfMeasure",
        "code"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.customAttributes.unitOfMeasure.code",
      "name": "code"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"EACH\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"EACH\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"EACH\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "customAttributes",
        "unitOfMeasure",
        "description"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.customAttributes.unitOfMeasure.description",
      "name": "description"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "customAttributes.lobHierarchy",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobHierarchy",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.hierarchyCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "hierarchyCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"1\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"1\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"1\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "pricePer"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.pricePer",
      "name": "pricePer"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "customAttributes.lOBInvoiceSource.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.lobInvoiceSource",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobInvoiceSource",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.referenceRootId",
      "nodeType": 1,
      "dataType": "string",
      "name": "referenceRootId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.fulfillmentUniqueLineReferenceNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentUniqueLineReferenceNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity2.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity2.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity5.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity5.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity6.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity6.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity10.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity10.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity11.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity11.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity14.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity14.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity15.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity15.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit",
      "nodeType": 2,
      "dataType": "string",
      "name": "accountingSplit",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems",
      "nodeType": 2,
      "dataType": "string",
      "name": "splitItems",
      "defaultValue": ""
    },
    "mappingType": "for-each"
  },
  {
    "from": {
      "jsonPath": "lineDetails",
      "nodeType": 2,
      "dataType": "string",
      "name": "lineDetails",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails",
      "nodeType": 2,
      "dataType": "string",
      "name": "lineDetails",
      "defaultValue": ""
    },
    "mappingType": "for-each"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.name",
            "nodeType": 1,
            "dataType": "string",
            "name": "name",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "name"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity7",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity7",
        "entityName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.entityName",
      "name": "entityName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.code",
            "nodeType": 1,
            "dataType": "string",
            "name": "code",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "code"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity7.entityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity7",
              "entityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity7",
        "entityCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity7.entityCode",
      "name": "entityCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "stakeHolders",
      "nodeType": 2,
      "dataType": "string",
      "name": "stakeHolders",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.stakeholders",
      "nodeType": 2,
      "dataType": "string",
      "name": "stakeholders",
      "defaultValue": ""
    },
    "mappingType": "for-each"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"6\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"6\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"4\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"4\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "stakeholderType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.stakeholderType",
      "name": "stakeholderType"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "primarySupplier.id",
      "nodeType": 1,
      "dataType": "string",
      "name": "id",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "id"
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplier",
        "leoSupplierId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplier.leoSupplierId",
      "name": "leoSupplierId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "name"
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplier",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplier.name",
      "name": "name"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.clientPartnerCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "clientPartnerCode",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "clientPartnerCode"
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplier",
        "clientCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplier.clientCode",
      "name": "clientCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.locationName",
            "nodeType": 1,
            "dataType": "string",
            "name": "locationName",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].locationName"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "locationName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.locationName",
      "name": "locationName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.locationCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "locationCode",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].locationCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "locationCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.locationCode",
      "name": "locationCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.partyName",
            "nodeType": 1,
            "dataType": "string",
            "name": "partyName",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].partyName"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "partyName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.partyName",
      "name": "partyName"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "firstName"
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "firstName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.firstName",
      "name": "firstName"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.lastName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lastName",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "lastName"
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "lastName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.lastName",
      "name": "lastName"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.fullName",
      "nodeType": 1,
      "dataType": "string",
      "name": "fullName",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "fullName"
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.name",
      "name": "name"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "emailId"
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "emailId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.emailId",
      "name": "emailId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.clientContactCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "clientContactCode",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "clientContactCode"
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "clientContactCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.clientContactCode",
      "name": "clientContactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "emailId"
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "emailAndPhoneNo"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.emailAndPhoneNo",
      "name": "emailAndPhoneNo"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "firstName"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "firstName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.firstName",
      "name": "firstName"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.lastName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lastName",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "lastName"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "lastName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.lastName",
      "name": "lastName"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.fullName",
      "nodeType": 1,
      "dataType": "string",
      "name": "fullName",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "fullName"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.name",
      "name": "name"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "emailId"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "emailId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.emailId",
      "name": "emailId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.contactCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "contactCode",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "contactCode"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "contactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.contactCode",
      "name": "contactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.clientContactCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "clientContactCode",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "clientContactCode"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "clientContactCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.clientContactCode",
      "name": "clientContactCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.contact.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "contact",
        "emailId"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "supplierContact",
        "emailAndPhoneNo"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.supplierContact.emailAndPhoneNo",
      "name": "emailAndPhoneNo"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "primarySupplier.location.address",
      "nodeType": 1,
      "dataType": "string",
      "name": "address",
      "defaultValue": "",
      "path": [
        "primarySupplier",
        "location",
        "address"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "orderingLocationAddress"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.orderingLocationAddress",
      "name": "orderingLocationAddress"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"7\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"7\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"7\""
      ]
    },
    "to": {
      "path": [
        "invoiceDocumentType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceDocumentType",
      "name": "invoiceDocumentType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"2\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"2\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"2\""
      ]
    },
    "to": {
      "path": [
        "invoiceOriginator"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceOriginator",
      "name": "invoiceOriginator"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"1\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"1\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"1\""
      ]
    },
    "to": {
      "path": [
        "invoiceSource"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceSource",
      "name": "invoiceSource"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "\"8\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"8\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"8\""
      ]
    },
    "to": {
      "path": [
        "invoiceSourceDocumentType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceSourceDocumentType",
      "name": "invoiceSourceDocumentType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "documentName",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "documentName",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "documentCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"3\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"3\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"3\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "stakeholderType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.stakeholderType",
      "name": "stakeholderType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "name": "\"true\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"true\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "name": "\"false\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"false\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "name": "\"true\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"true\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "name": "\"false\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"false\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"false\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"false\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "isGroup"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.isGroup",
      "name": "isGroup"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "orgEntities.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "legalTerm.expiryDate",
      "nodeType": 1,
      "dataType": "string",
      "name": "expiryDate",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.contract.contractExpiryDate",
      "nodeType": 1,
      "dataType": "string",
      "name": "contractExpiryDate",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if legalTerm.expiryDate != null %}\"{{legalTerm.expiryDate | Date :\"yyy-MM-ddTHH:mm:ssZ\"}}\"{% else %}null{% endif %}"
  },
  {
    "from": [
      {
        "jsonPath": "lineDetails.endDate",
        "nodeType": 1,
        "dataType": "string",
        "name": "endDate",
        "defaultValue": "",
        "path": [
          "lineDetails",
          "endDate"
        ]
      },
      {
        "jsonPath": "\"yyyy-MM-ddTHH:mm:ssZ\"",
        "nodeType": 1,
        "dataType": "string",
        "name": "\"yyyy-MM-ddTHH:mm:ssZ\"",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "path": [
          "\"yyyy-MM-ddTHH:mm:ssZ\""
        ],
        "mapFunction": "format"
      }
    ],
    "to": {
      "jsonPath": "lineDetails.endDate",
      "nodeType": 1,
      "dataType": "string",
      "name": "endDate",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.endDate and lineDetails.endDate != empty %}\"{{lineDetails.endDate | Date : \"yyy-MM-ddTHH:mm:ssZ\" }}\"{% else %}null{% endif %}"
  },
  {
    "from": [
      {
        "jsonPath": "lineDetails.startDate",
        "nodeType": 1,
        "dataType": "string",
        "name": "startDate",
        "defaultValue": "",
        "path": [
          "lineDetails",
          "startDate"
        ]
      },
      {
        "jsonPath": "\"yyyy-MM-ddTHH:mm:ssZ\"",
        "nodeType": 1,
        "dataType": "string",
        "name": "\"yyyy-MM-ddTHH:mm:ssZ\"",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "path": [
          "\"yyyy-MM-ddTHH:mm:ssZ\""
        ],
        "mapFunction": "format"
      }
    ],
    "to": {
      "jsonPath": "lineDetails.startDate",
      "nodeType": 1,
      "dataType": "string",
      "name": "startDate",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.startDate and lineDetails.startDate != empty %}\"{{lineDetails.startDate | Date : \"yyy-MM-ddTHH:mm:ssZ\" }}\"{% else %}null{% endif %}"
  },
  {
    "from": {
      "jsonPath": "\"00000000-0000-0000-0000-000000000000\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"00000000-0000-0000-0000-000000000000\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"00000000-0000-0000-0000-000000000000\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "leoLocationId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.leoLocationId",
      "name": "leoLocationId"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "orgEntities.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities.entityDetailName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "lineDetails.startDate",
        "nodeType": 1,
        "dataType": "string",
        "name": "startDate",
        "defaultValue": "",
        "path": [
          "lineDetails",
          "startDate"
        ],
        "fromPathReplacement": "lineDetails[0].startDate"
      },
      {
        "jsonPath": "\"yyyy-MM-ddTHH:mm:ssZ\"",
        "nodeType": 1,
        "dataType": "string",
        "name": "\"yyyy-MM-ddTHH:mm:ssZ\"",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "path": [
          "\"yyyy-MM-ddTHH:mm:ssZ\""
        ],
        "mapFunction": "format"
      }
    ],
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.startDate",
      "nodeType": 1,
      "dataType": "string",
      "name": "startDate",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.startDate and lineDetails.startDate != empty %}\"{{lineDetails.startDate | Date : \"yyy-MM-ddTHH:mm:ssZ\" }}\"{% else %}null{% endif %}"
  },
  {
    "from": [
      {
        "jsonPath": "lineDetails.endDate",
        "nodeType": 1,
        "dataType": "string",
        "name": "endDate",
        "defaultValue": "",
        "path": [
          "lineDetails",
          "endDate"
        ],
        "fromPathReplacement": "lineDetails[0].endDate"
      },
      {
        "jsonPath": "\"yyyy-MM-ddTHH:mm:ssZ\"",
        "nodeType": 1,
        "dataType": "string",
        "name": "\"yyyy-MM-ddTHH:mm:ssZ\"",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "path": [
          "\"yyyy-MM-ddTHH:mm:ssZ\""
        ],
        "mapFunction": "format"
      }
    ],
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.endDate",
      "nodeType": 1,
      "dataType": "string",
      "name": "endDate",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.endDate and lineDetails.endDate != empty %}\"{{lineDetails.endDate | Date : \"yyy-MM-ddTHH:mm:ssZ\" }}\"{% else %}null{% endif %}"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.city",
            "nodeType": 1,
            "dataType": "string",
            "name": "city",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].city"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "city"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.city",
      "name": "city"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.addressline3",
            "nodeType": 1,
            "dataType": "string",
            "name": "addressline3",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].addressline3"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "addressline3"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.addressline3",
      "name": "addressline3"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.addressline2",
            "nodeType": 1,
            "dataType": "string",
            "name": "addressline2",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].addressline2"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "addressline2"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.addressline2",
      "name": "addressline2"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.addressline1",
            "nodeType": 1,
            "dataType": "string",
            "name": "addressline1",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].addressline1"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "addressline1"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.addressline1",
      "name": "addressline1"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "\"0\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"0\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"0\""
      ]
    },
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "addressCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.addressCode",
      "name": "addressCode"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity13.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity13.entityDetailName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.entityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.entityType",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityType",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.entityDetailDescription",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailDescription",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "number",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.lobName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.lobCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "lobCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.isActive",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isActive",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.level",
      "nodeType": 1,
      "dataType": "number",
      "name": "level",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.culture",
      "nodeType": 1,
      "dataType": "string",
      "name": "culture",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.displayName",
      "nodeType": 1,
      "dataType": "string",
      "name": "displayName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.entityName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.entityDetailName",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.entityId",
      "nodeType": 1,
      "dataType": "number",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity8.version",
      "nodeType": 1,
      "dataType": "string",
      "name": "version",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity9.version",
      "nodeType": 1,
      "dataType": "number",
      "name": "version",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Service\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Service\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.lineType.name",
            "nodeType": 1,
            "dataType": "string",
            "name": "name",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "lineType",
              "name"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "customAttributes",
        "lineType",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.customAttributes.lineType.name",
      "name": "name"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"No\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"No\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.discountEligible.name",
            "nodeType": 1,
            "dataType": "string",
            "name": "name",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "discountEligible",
              "name"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "customAttributes",
        "discountEligible"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.customAttributes.discountEligible",
      "name": "discountEligible"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "lineDetails.discountEligible",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "discountEligible",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.discountEligible",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "discountEligible",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"K\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"K\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "customAttributes",
        "accountAssignment",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.customAttributes.accountAssignment.name",
      "name": "name"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.entityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "entityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.entityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "entityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "entityDetailCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.entityDetailCode",
      "name": "entityDetailCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "entityName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.entityName",
      "name": "entityName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.entityType",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityType",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "entityType"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.entityType",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityType",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "entityType"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "entityType"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.entityType",
      "name": "entityType"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.entityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "entityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.entityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "entityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "entityCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.entityCode",
      "name": "entityCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.entityDetailDescription",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailDescription",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "entityDetailDescription"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.entityDetailDescription",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailDescription",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "entityDetailDescription"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "entityDetailDescription"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.entityDetailDescription",
      "name": "entityDetailDescription"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.parentEntityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityDetailCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "parentEntityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.parentEntityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityDetailCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "parentEntityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "parentEntityDetailCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.parentEntityDetailCode",
      "name": "parentEntityDetailCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.parentEntity",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntity",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "parentEntity"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.parentEntity",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntity",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "parentEntity"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "parentEntity"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.parentEntity",
      "name": "parentEntity"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.parentEntityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "parentEntityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.parentEntityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "parentEntityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "parentEntityCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.parentEntityCode",
      "name": "parentEntityCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.lobName",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "lobName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.lobName",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "lobName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "lobName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.lobName",
      "name": "lobName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.lobCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "lobCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.lobCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "lobCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "lobCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.lobCode",
      "name": "lobCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.isActive",
            "nodeType": 1,
            "dataType": "boolean",
            "name": "isActive",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "isActive"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.isActive",
            "nodeType": 1,
            "dataType": "boolean",
            "name": "isActive",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "isActive"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "isActive"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.isActive",
      "name": "isActive"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.level",
            "nodeType": 1,
            "dataType": "number",
            "name": "level",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "level"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.level",
            "nodeType": 1,
            "dataType": "number",
            "name": "level",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "level"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "level"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.level",
      "name": "level"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.gLAccount.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "gLAccount",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity12.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity12",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity8",
        "entityDetailName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity8.entityDetailName",
      "name": "entityDetailName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.entityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "entityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.entityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "entityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "entityDetailCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.entityDetailCode",
      "name": "entityDetailCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "entityName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.entityName",
      "name": "entityName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.entityType",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityType",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "entityType"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.entityType",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityType",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "entityType"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "entityType"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.entityType",
      "name": "entityType"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.entityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "entityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.entityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "entityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "entityCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.entityCode",
      "name": "entityCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.entityDetailDescription",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailDescription",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "entityDetailDescription"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.entityDetailDescription",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailDescription",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "entityDetailDescription"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "entityDetailDescription"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.entityDetailDescription",
      "name": "entityDetailDescription"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.parentEntityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityDetailCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "parentEntityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.parentEntityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityDetailCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "parentEntityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "parentEntityDetailCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.parentEntityDetailCode",
      "name": "parentEntityDetailCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.parentEntity",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntity",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "parentEntity"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.parentEntity",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntity",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "parentEntity"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "parentEntity"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.parentEntity",
      "name": "parentEntity"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.parentEntityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "parentEntityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.parentEntityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "parentEntityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "parentEntityCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.parentEntityCode",
      "name": "parentEntityCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.lobName",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "lobName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.lobName",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "lobName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "lobName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.lobName",
      "name": "lobName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.lobCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "lobCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.lobCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "lobCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "lobCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.lobCode",
      "name": "lobCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.isActive",
            "nodeType": 1,
            "dataType": "boolean",
            "name": "isActive",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "isActive"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.isActive",
            "nodeType": 1,
            "dataType": "boolean",
            "name": "isActive",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "isActive"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "isActive"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.isActive",
      "name": "isActive"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.level",
            "nodeType": 1,
            "dataType": "number",
            "name": "level",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "level"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.level",
            "nodeType": 1,
            "dataType": "number",
            "name": "level",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "level"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "level"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.level",
      "name": "level"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.costCenter.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "costCenter",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity4.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity4",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity4",
        "entityDetailName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity4.entityDetailName",
      "name": "entityDetailName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.entityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "entityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.entityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "entityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "entityDetailCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.entityDetailCode",
      "name": "entityDetailCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "entityName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.entityName",
      "name": "entityName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.entityType",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityType",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "entityType"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.entityType",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityType",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "entityType"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "entityType"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.entityType",
      "name": "entityType"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.entityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "entityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.entityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "entityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "entityCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.entityCode",
      "name": "entityCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.entityDetailDescription",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailDescription",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "entityDetailDescription"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.entityDetailDescription",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityDetailDescription",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "entityDetailDescription"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "entityDetailDescription"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.entityDetailDescription",
      "name": "entityDetailDescription"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.parentEntityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityDetailCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "parentEntityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.parentEntityDetailCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityDetailCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "parentEntityDetailCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "parentEntityDetailCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.parentEntityDetailCode",
      "name": "parentEntityDetailCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.parentEntity",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntity",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "parentEntity"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.parentEntity",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntity",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "parentEntity"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "parentEntity"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.parentEntity",
      "name": "parentEntity"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.parentEntityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "parentEntityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.parentEntityCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "parentEntityCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "parentEntityCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "parentEntityCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.parentEntityCode",
      "name": "parentEntityCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.lobName",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "lobName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.lobName",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "lobName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "lobName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.lobName",
      "name": "lobName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.lobCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "lobCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.lobCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "lobCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "lobCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.lobCode",
      "name": "lobCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.isActive",
            "nodeType": 1,
            "dataType": "boolean",
            "name": "isActive",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "isActive"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.isActive",
            "nodeType": 1,
            "dataType": "boolean",
            "name": "isActive",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "isActive"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "isActive"
      ],
      "nodeType": 1,
      "dataType": "boolean",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.isActive",
      "name": "isActive"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.level",
            "nodeType": 1,
            "dataType": "number",
            "name": "level",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "level"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.level",
            "nodeType": 1,
            "dataType": "number",
            "name": "level",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "level"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "level"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.level",
      "name": "level"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.companyCode.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "companyCode",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity3.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity3",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity3",
        "entityDetailName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity3.entityDetailName",
      "name": "entityDetailName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"K\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"K\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "customAttributes",
        "accountAssignment"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.customAttributes.accountAssignment",
      "name": "accountAssignment"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"K\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"K\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.accountingDetails.entity1.entityName",
            "nodeType": 1,
            "dataType": "string",
            "name": "entityName",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "accountingDetails",
              "entity1",
              "entityName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "accountingDetails",
        "entity1",
        "entityName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.accountingDetails.entity1.entityName",
      "name": "entityName"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.cultureCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "cultureCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.cultureCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "cultureCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.unitPrice",
      "nodeType": 1,
      "dataType": "number",
      "name": "unitPrice",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.unitPrice",
      "nodeType": 1,
      "dataType": "number",
      "name": "unitPrice",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.lineNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.lineNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.accountingSplit.splitType.code",
                "nodeType": 1,
                "dataType": "string",
                "name": "code",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "accountingSplit",
                  "splitType",
                  "code"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          },
          {
            "name": "~",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "~",
            "nodeType": 1,
            "dataType": "string",
            "mapFunction": "tointeger"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.splitType.code",
            "nodeType": 1,
            "dataType": "string",
            "name": "code",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "splitType",
              "code"
            ]
          },
          {
            "name": "~",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "~",
            "nodeType": 1,
            "dataType": "string",
            "mapFunction": "tointeger"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "splitType",
        "code"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.splitType.code",
      "name": "code"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.zipCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "zipCode",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].zipCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "zipCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.zipCode",
      "name": "zipCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.countryInfo.countryCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "countryCode",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].countryInfo.countryCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "countryInfo",
        "countryCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.countryInfo.countryCode",
      "name": "countryCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.countryInfo.countryName",
            "nodeType": 1,
            "dataType": "string",
            "name": "countryName",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].countryInfo.countryName"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "countryInfo",
        "countryName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.countryInfo.countryName",
      "name": "countryName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.stateInfo.stateCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "stateCode",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].stateInfo.stateCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "stateInfo",
        "stateCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.stateInfo.stateCode",
      "name": "stateCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.stateInfo.stateName",
            "nodeType": 1,
            "dataType": "string",
            "name": "stateName",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].stateInfo.stateName"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "address",
        "stateInfo",
        "stateName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.address.stateInfo.stateName",
      "name": "stateName"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.isSplitRow",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isSplitRow",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.isSplitRow",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "isSplitRow",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.locationCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "locationCode",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].locationCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "orderingLocation",
        "clientLocationCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.orderingLocation.clientLocationCode",
      "name": "clientLocationCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.eRPType",
                "nodeType": 2,
                "dataType": "string",
                "name": "eRPType",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "eRPType"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.eRPType.lobCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "lobCode",
            "defaultValue": "",
            "fromPathReplacement": "customAttributes.eRPType[0].lobCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "customAttributes",
        "erpType"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.customAttributes.erpType",
      "name": "erpType"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "lineDetails.lineTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "lineTotal",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.lineTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "lineTotal",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.lineTotal and lineDetails.lineTotal != empty %}{{lineDetails.lineTotal}}{% else %}0{% endif %}"
  },
  {
    "from": {
      "jsonPath": "lineDetails.lineTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "lineTotal",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.lineTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "lineTotal",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.lineTotal and lineDetails.lineTotal != empty %}{{lineDetails.lineTotal}}{% else %}0{% endif %}"
  },
  {
    "from": {
      "jsonPath": "lineDetails.lineTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "lineTotal",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.lineSubTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "lineSubTotal",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.lineTotal and lineDetails.lineTotal != empty %}{{lineDetails.lineTotal}}{% else %}0{% endif %}"
  },
  {
    "from": {
      "jsonPath": "lineDetails.lineTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "lineTotal",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.lineSubTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "lineSubTotal",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.lineTotal and lineDetails.lineTotal != empty %}{{lineDetails.lineTotal}}{% else %}0{% endif %}"
  },
  {
    "from": {
      "jsonPath": "customAttributes.accountingKey.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.customAttributes.accountingKey",
      "nodeType": 1,
      "dataType": "string",
      "name": "accountingKey",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "customAttributes.accountingKey.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.bankAccountingKey",
      "nodeType": 1,
      "dataType": "string",
      "name": "bankAccountingKey",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.accountingKey.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "accountingKey",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Company:CostCenter\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Company:CostCenter\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Company Code:Cost Center\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Company Code:Cost Center\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.accountingKey.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "accountingKey",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Company:CostCenter:Account\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Company:CostCenter:Account\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Company Code:Cost Center:GL Account\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Company Code:Cost Center:GL Account\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.accountingKey.name",
            "nodeType": 1,
            "dataType": "string",
            "name": "name",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "accountingKey",
              "name"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "customAttributes",
        "accountingKey"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.customAttributes.accountingKey",
      "name": "accountingKey"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "documentNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "documentNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "fulfillmentDocumentDetails.fulfillmentDocumentNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "fulfillmentDocumentNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "documentNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.documentNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "documentNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.locationCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "locationCode",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].locationCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "locationCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.locationCode",
      "name": "locationCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.locationName",
            "nodeType": 1,
            "dataType": "string",
            "name": "locationName",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].locationName"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "locationName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.locationName",
      "name": "locationName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.locationCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "locationCode",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].locationCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "clientLocationCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.clientLocationCode",
      "name": "clientLocationCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.partyName",
            "nodeType": 1,
            "dataType": "string",
            "name": "partyName",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].partyName"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "partyName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.partyName",
      "name": "partyName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.zipCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "zipCode",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].zipCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "zipCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.zipCode",
      "name": "zipCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.city",
            "nodeType": 1,
            "dataType": "string",
            "name": "city",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].city"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "city"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.city",
      "name": "city"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.addressline3",
            "nodeType": 1,
            "dataType": "string",
            "name": "addressline3",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].addressline3"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "addressline3"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.addressline3",
      "name": "addressline3"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.addressline2",
            "nodeType": 1,
            "dataType": "string",
            "name": "addressline2",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].addressline2"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "addressline2"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.addressline2",
      "name": "addressline2"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.addressline1",
            "nodeType": 1,
            "dataType": "string",
            "name": "addressline1",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].addressline1"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "addressline1"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.addressline1",
      "name": "addressline1"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.countryInfo.countryCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "countryCode",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].countryInfo.countryCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "countryInfo",
        "countryCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.countryInfo.countryCode",
      "name": "countryCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.countryInfo.countryName",
            "nodeType": 1,
            "dataType": "string",
            "name": "countryName",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].countryInfo.countryName"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "countryInfo",
        "countryName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.countryInfo.countryName",
      "name": "countryName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.stateInfo.stateCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "stateCode",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].stateInfo.stateCode"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "stateInfo",
        "stateCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.stateInfo.stateCode",
      "name": "stateCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.supplierLocation",
                "nodeType": 2,
                "dataType": "string",
                "name": "supplierLocation",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "supplierLocation"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "size"
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": ">"
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.supplierLocation.address.stateInfo.stateName",
            "nodeType": 1,
            "dataType": "string",
            "name": "stateName",
            "defaultValue": "",
            "fromPathReplacement": "primarySupplier.supplierLocation[0].address[0].stateInfo.stateName"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "orderingLocation",
        "address",
        "stateInfo",
        "stateName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderingLocation.address.stateInfo.stateName",
      "name": "stateName"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.firstName",
      "nodeType": 1,
      "dataType": "string",
      "name": "firstName",
      "defaultValue": "",
      "path": [
        "basicDetail",
        "owner",
        "firstName"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderContact",
        "firstName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderContact.firstName",
      "name": "firstName"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.lastName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lastName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.orderContact.lastName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lastName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.fullName",
      "nodeType": 1,
      "dataType": "string",
      "name": "fullName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.orderContact.name",
      "nodeType": 1,
      "dataType": "string",
      "name": "name",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.owner.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.orderContact.emailId",
      "nodeType": 1,
      "dataType": "string",
      "name": "emailId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "\"2\"",
      "nodeType": 1,
      "dataType": "string",
      "name": "\"2\"",
      "defaultValue": "",
      "value": "",
      "children": [
        
      ],
      "path": [
        "\"2\""
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "orderContact",
        "stakeholderType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.orderContact.stakeholderType",
      "name": "stakeholderType"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "lineDetails.startDate",
      "nodeType": 1,
      "dataType": "string",
      "name": "startDate",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.customAttributes.contractStartDate",
      "nodeType": 1,
      "dataType": "string",
      "name": "contractStartDate",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.startDate and lineDetails.startDate != empty %}\"{{lineDetails.startDate | Date : \"yyy-MM-ddTHH:mm:ssZ\" }}\"{% else %}null{% endif %}"
  },
  {
    "from": {
      "jsonPath": "lineDetails.endDate",
      "nodeType": 1,
      "dataType": "string",
      "name": "endDate",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.customAttributes.contractEndDate",
      "nodeType": 1,
      "dataType": "string",
      "name": "contractEndDate",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.endDate and lineDetails.endDate  != empty %}\"{{lineDetails.endDate  | Date : \"yyy-MM-ddTHH:mm:ssZ\" }}\"{% else %}null{% endif %}"
  },
  {
    "from": {
      "jsonPath": "orgEntities",
      "nodeType": 2,
      "dataType": "string",
      "name": "orgEntities",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities",
      "nodeType": 2,
      "dataType": "string",
      "name": "orgEntities",
      "defaultValue": ""
    },
    "mappingType": "for-each"
  },
  {
    "from": {
      "jsonPath": "orgEntities.parentEntityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityDetailCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities.parentOrgEntityDetails.entityDetailCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityDetailCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "orgEntities.parentEntity",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntity",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities.parentOrgEntityDetails.entityId",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "orgEntities.parentEntityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentEntityCode",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.orgEntities.parentOrgEntityDetails.entityCode",
      "nodeType": 1,
      "dataType": "string",
      "name": "entityCode",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Amount\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Amount\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.splitType.name",
            "nodeType": 1,
            "dataType": "string",
            "name": "name",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "splitType",
              "name"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "splitType",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.splitType.name",
      "name": "name"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "primarySupplier.contact.contactCode",
                "nodeType": 1,
                "dataType": "number",
                "name": "contactCode",
                "defaultValue": "",
                "path": [
                  "primarySupplier",
                  "contact",
                  "contactCode"
                ]
              }
            ],
            "rhs": [
              {
                "jsonPath": "null",
                "nodeType": 1,
                "dataType": "string",
                "name": "null",
                "defaultValue": "",
                "path": [
                  "null"
                ]
              }
            ],
            "operator": "!="
          }
        ],
        "assign": [
          {
            "jsonPath": "primarySupplier.contact.contactCode",
            "nodeType": 1,
            "dataType": "number",
            "name": "contactCode",
            "defaultValue": "",
            "path": [
              "primarySupplier",
              "contact",
              "contactCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "supplierContact",
        "contactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.supplierContact.contactCode",
      "name": "contactCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "categories.description",
            "nodeType": 1,
            "dataType": "string",
            "name": "description",
            "defaultValue": "",
            "path": [
              "categories",
              "description"
            ],
            "fromPathReplacement": "categories[description!=\"\"][0].description",
            "filter": [
              {
                "condition": [
                  {
                    "lhsRaw": "description",
                    "rhs": [
                      {
                        "name": "\"\"",
                        "value": "",
                        "children": [
                          
                        ],
                        "jsonPath": "\"\"",
                        "nodeType": 1,
                        "dataType": "string"
                      }
                    ],
                    "operator": "!="
                  }
                ],
                "arrayToFilter": {
                  "jsonPath": "categories."
                },
                "index": "0"
              }
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.category.description",
            "nodeType": 1,
            "dataType": "string",
            "name": "description",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "category",
              "description"
            ],
            "fromPathReplacement": "lineDetails.category[description!=\"\"][0].description",
            "filter": [
              {
                "condition": [
                  {
                    "lhsRaw": "description",
                    "rhs": [
                      {
                        "name": "\"\"",
                        "value": "",
                        "children": [
                          
                        ],
                        "jsonPath": "\"\"",
                        "nodeType": 1,
                        "dataType": "string"
                      }
                    ],
                    "operator": "!="
                  }
                ],
                "arrayToFilter": {
                  "jsonPath": "lineDetails.category."
                },
                "index": "0"
              }
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "category",
        "description"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.category.description",
      "name": "description"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "categories.name",
            "nodeType": 1,
            "dataType": "string",
            "name": "name",
            "defaultValue": "",
            "path": [
              "categories",
              "name"
            ],
            "fromPathReplacement": "categories[name!=\"\"][0].name",
            "filter": [
              {
                "condition": [
                  {
                    "lhsRaw": "name",
                    "rhs": [
                      {
                        "name": "\"\"",
                        "value": "",
                        "children": [
                          
                        ],
                        "jsonPath": "\"\"",
                        "nodeType": 1,
                        "dataType": "string"
                      }
                    ],
                    "operator": "!="
                  }
                ],
                "arrayToFilter": {
                  "jsonPath": "categories."
                },
                "index": "0"
              }
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.category.name",
            "nodeType": 1,
            "dataType": "string",
            "name": "name",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "category",
              "name"
            ],
            "fromPathReplacement": "lineDetails.category[name!=\"\"][0].name",
            "filter": [
              {
                "condition": [
                  {
                    "lhsRaw": "name",
                    "rhs": [
                      {
                        "name": "\"\"",
                        "value": "",
                        "children": [
                          
                        ],
                        "jsonPath": "\"\"",
                        "nodeType": 1,
                        "dataType": "string"
                      }
                    ],
                    "operator": "!="
                  }
                ],
                "arrayToFilter": {
                  "jsonPath": "lineDetails.category."
                },
                "index": "0"
              }
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "category",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.category.name",
      "name": "name"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "categories.id",
            "nodeType": 1,
            "dataType": "number",
            "name": "id",
            "defaultValue": "",
            "path": [
              "categories",
              "id"
            ],
            "fromPathReplacement": "categories[id!=\"\"][0].id",
            "filter": [
              {
                "condition": [
                  {
                    "lhsRaw": "id",
                    "rhs": [
                      {
                        "name": "\"\"",
                        "value": "",
                        "children": [
                          
                        ],
                        "jsonPath": "\"\"",
                        "nodeType": 1,
                        "dataType": "string"
                      }
                    ],
                    "operator": "!="
                  }
                ],
                "arrayToFilter": {
                  "jsonPath": "categories."
                },
                "index": "0"
              }
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.category.id",
            "nodeType": 1,
            "dataType": "number",
            "name": "id",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "category",
              "id"
            ],
            "fromPathReplacement": "lineDetails.category[id!=\"\"][0].id",
            "filter": [
              {
                "condition": [
                  {
                    "lhsRaw": "id",
                    "rhs": [
                      {
                        "name": "\"\"",
                        "value": "",
                        "children": [
                          
                        ],
                        "jsonPath": "\"\"",
                        "nodeType": 1,
                        "dataType": "string"
                      }
                    ],
                    "operator": "!="
                  }
                ],
                "arrayToFilter": {
                  "jsonPath": "lineDetails.category."
                },
                "index": "0"
              }
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "category",
        "id"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.category.id",
      "name": "id"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "categories.clientCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "clientCode",
            "defaultValue": "",
            "path": [
              "categories",
              "clientCode"
            ],
            "fromPathReplacement": "categories[clientCode!=\"\"][0].clientCode",
            "filter": [
              {
                "condition": [
                  {
                    "lhsRaw": "clientCode",
                    "rhs": [
                      {
                        "name": "\"\"",
                        "value": "",
                        "children": [
                          
                        ],
                        "jsonPath": "\"\"",
                        "nodeType": 1,
                        "dataType": "string"
                      }
                    ],
                    "operator": "!="
                  }
                ],
                "arrayToFilter": {
                  "jsonPath": "categories."
                },
                "index": "0"
              }
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.category.clientCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "clientCode",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "category",
              "clientCode"
            ],
            "fromPathReplacement": "lineDetails.category[clientCode!=\"\"][0].clientCode",
            "filter": [
              {
                "condition": [
                  {
                    "lhsRaw": "clientCode",
                    "rhs": [
                      {
                        "name": "\"\"",
                        "value": "",
                        "children": [
                          
                        ],
                        "jsonPath": "\"\"",
                        "nodeType": 1,
                        "dataType": "string"
                      }
                    ],
                    "operator": "!="
                  }
                ],
                "arrayToFilter": {
                  "jsonPath": "lineDetails.category."
                },
                "index": "0"
              }
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "category",
        "clientCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.category.clientCode",
      "name": "clientCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "lineDetails.lineNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.contract.contractLineNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "contractLineNumber",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.lineItemName",
      "nodeType": 1,
      "dataType": "string",
      "name": "lineItemName",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.shortName",
      "nodeType": 1,
      "dataType": "string",
      "name": "shortName",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "basicDetail.parentDocument.revisedContractNumber",
      "nodeType": 1,
      "dataType": "string",
      "name": "revisedContractNumber",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.parentContractId",
      "nodeType": 1,
      "dataType": "string",
      "name": "parentContractId",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.splitItemSubTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "splitItemSubTotal",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.splitItemSubTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "splitItemSubTotal",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.splitItemSubTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "splitItemSubTotal",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.splitItems.splitItemTotal",
      "nodeType": 1,
      "dataType": "number",
      "name": "splitItemTotal",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.unitPrice",
      "nodeType": 1,
      "dataType": "number",
      "name": "unitPrice",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.unitPrice",
      "nodeType": 1,
      "dataType": "number",
      "name": "unitPrice",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.unitPrice and lineDetails.unitPrice != empty %}{{lineDetails.unitPrice}}{% else %}0{% endif %}"
  },
  {
    "from": {
      "jsonPath": "lineDetails.unitPrice",
      "nodeType": 1,
      "dataType": "number",
      "name": "unitPrice",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.unitPrice",
      "nodeType": 1,
      "dataType": "number",
      "name": "unitPrice",
      "defaultValue": ""
    },
    "mappingType": "one-to-one",
    "isCustomScript": true,
    "cutomScriptText": "{% if lineDetails.unitPrice and lineDetails.unitPrice != empty %}{{lineDetails.unitPrice}}{% else %}0{% endif %}"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"1\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"1\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.priceBasis.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "priceBasis",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Amount Based\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Amount Based\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.lineType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "lineType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Service\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Service\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "name": "\"1\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"1\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.maxQuantity",
                "nodeType": 1,
                "dataType": "number",
                "name": "maxQuantity",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "maxQuantity"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "isnullorempty"
              }
            ],
            "rhs": [
              
            ],
            "operator": ""
          }
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.maxQuantity",
            "nodeType": 1,
            "dataType": "number",
            "name": "maxQuantity",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "maxQuantity"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "quantity"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.quantity",
      "name": "quantity"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"1\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"1\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.priceBasis.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "priceBasis",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Amount Based\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Amount Based\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.lineType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "lineType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Service\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Service\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "name": "\"1\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"1\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.maxQuantity",
                "nodeType": 1,
                "dataType": "number",
                "name": "maxQuantity",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "maxQuantity"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "isnullorempty"
              }
            ],
            "rhs": [
              
            ],
            "operator": ""
          }
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.maxQuantity",
            "nodeType": 1,
            "dataType": "number",
            "name": "maxQuantity",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "maxQuantity"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "fulfillmentDocumentLineDetails",
        "quantity"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.fulfillmentDocumentLineDetails.quantity",
      "name": "quantity"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"1\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"1\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.priceBasis.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "priceBasis",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "jsonPath": "\"Amount Based\"",
                "nodeType": 1,
                "dataType": "string",
                "name": "\"Amount Based\"",
                "defaultValue": "",
                "path": [
                  "\"Amount Based\""
                ]
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.lineType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "lineType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Service\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Service\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "name": "\"1\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"1\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.accountingSplit.splitItemValue",
                "nodeType": 1,
                "dataType": "number",
                "name": "splitItemValue",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "accountingSplit",
                  "splitItemValue"
                ]
              },
              {
                "name": "~",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "~",
                "nodeType": 1,
                "dataType": "string",
                "mapFunction": "isnullorempty"
              }
            ],
            "rhs": [
              
            ],
            "operator": ""
          }
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.splitItemValue",
            "nodeType": 1,
            "dataType": "number",
            "name": "splitItemValue",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "splitItemValue"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "splitItemValue"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.splitItemValue",
      "name": "splitItemValue"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"100\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"100\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"2\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"2\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.accountingSplit.percentage",
                "nodeType": 1,
                "dataType": "number",
                "name": "percentage",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "accountingSplit",
                  "percentage"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"0\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"0\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "name": "\"100\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"100\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.percentage",
            "nodeType": 1,
            "dataType": "number",
            "name": "percentage",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "percentage"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "percentage"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.percentage",
      "name": "percentage"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.commodityCode.code",
            "nodeType": 1,
            "dataType": "string",
            "name": "code",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "commodityCode",
              "code"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.unspsc.code",
            "nodeType": 1,
            "dataType": "string",
            "name": "code",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "unspsc",
              "code"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "customAttributes",
        "commodity"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.customAttributes.commodity",
      "name": "commodity"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Service\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Service\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.lineType.name",
            "nodeType": 1,
            "dataType": "string",
            "name": "name",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "lineType",
              "name"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "lineType",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.lineType.name",
      "name": "name"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"2\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"2\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.lineType.id",
                "nodeType": 1,
                "dataType": "string",
                "name": "id",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "lineType",
                  "id"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.lineType.id",
            "nodeType": 1,
            "dataType": "string",
            "name": "id",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "lineType",
              "id"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "lineType",
        "itemType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.lineType.itemType",
      "name": "itemType"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Amount\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Amount\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.priceBasis.name",
            "nodeType": 1,
            "dataType": "string",
            "name": "name",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "priceBasis",
              "name"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "basisType",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.basisType.name",
      "name": "name"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"2\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"2\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.priceBasis.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "priceBasis",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Amount Based\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Amount Based\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"2\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"2\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.priceBasis.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "priceBasis",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Quantity Based\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Quantity Based\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.priceBasis.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "priceBasis",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Rate Based\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Rate Based\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"1\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"1\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"3\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"3\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "basisType",
        "basis"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.basisType.basis",
      "name": "basis"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"EA\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"EA\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.uom.code",
            "nodeType": 1,
            "dataType": "string",
            "name": "code",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "uom",
              "code"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "uom",
        "code"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.uom.code",
      "name": "code"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Each\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Each\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.uom.description",
            "nodeType": 1,
            "dataType": "string",
            "name": "description",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "uom",
              "description"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "uom",
        "description"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.uom.description",
      "name": "description"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"No\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"No\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.discountEligible",
            "nodeType": 1,
            "dataType": "boolean",
            "name": "discountEligible",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "discountEligible"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "customAttributes",
        "discountEligible"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.customAttributes.discountEligible",
      "name": "discountEligible"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "lineDetails.uom.allowDecimalValue",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "allowDecimalValue",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "lineDetails.uom.allowDecimal",
      "nodeType": 1,
      "dataType": "boolean",
      "name": "allowDecimal",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"SERVICE_ITEM\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"SERVICE_ITEM\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.lineType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "lineType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Service\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Service\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"SERVICE_ITEM\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"SERVICE_ITEM\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.lineType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "lineType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Material\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Material\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Material\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Material\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "lineExtendedType",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.lineExtendedType.name",
      "name": "name"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"14\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"14\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.lineType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "lineType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Service\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Service\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"14\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"14\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.lineType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "lineType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Material\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Material\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"1\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"1\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "lineExtendedType",
        "itemExtendedType"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "lineDetails.lineExtendedType.itemExtendedType",
      "name": "itemExtendedType"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "basicDetail.contractSubType.lineType",
                "nodeType": 1,
                "dataType": "string",
                "name": "lineType",
                "defaultValue": "",
                "path": [
                  "basicDetail",
                  "contractSubType",
                  "lineType"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"3\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"3\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Split Item 1\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Split Item 1\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "lineDetails.accountingSplit.splitNumber",
                "nodeType": 1,
                "dataType": "string",
                "name": "splitNumber",
                "defaultValue": "",
                "path": [
                  "lineDetails",
                  "accountingSplit",
                  "splitNumber"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          }
        ],
        "assign": [
          {
            "name": "\"Split Item 1\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"Split Item 1\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "jsonPath": "lineDetails.accountingSplit.splitNumber",
            "nodeType": 1,
            "dataType": "string",
            "name": "splitNumber",
            "defaultValue": "",
            "path": [
              "lineDetails",
              "accountingSplit",
              "splitNumber"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "splitNumber"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.splitNumber",
      "name": "splitNumber"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolversGroup.firstName",
            "nodeType": 1,
            "dataType": "string",
            "name": "firstName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolversGroup",
              "firstName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolvers.firstName",
            "nodeType": 1,
            "dataType": "string",
            "name": "firstName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolvers",
              "firstName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.invoiceApproversGroup.firstName",
            "nodeType": 1,
            "dataType": "string",
            "name": "firstName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "invoiceApproversGroup",
              "firstName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "stakeHolders.firstName",
            "nodeType": 1,
            "dataType": "string",
            "name": "firstName",
            "defaultValue": "",
            "path": [
              "stakeHolders",
              "firstName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "firstName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.firstName",
      "name": "firstName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolversGroup.lastName",
            "nodeType": 1,
            "dataType": "string",
            "name": "lastName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolversGroup",
              "lastName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolvers.lastName",
            "nodeType": 1,
            "dataType": "string",
            "name": "lastName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolvers",
              "lastName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.invoiceApproversGroup.lastName",
            "nodeType": 1,
            "dataType": "string",
            "name": "lastName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "invoiceApproversGroup",
              "lastName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "stakeHolders.lastName",
            "nodeType": 1,
            "dataType": "string",
            "name": "lastName",
            "defaultValue": "",
            "path": [
              "stakeHolders",
              "lastName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "lastName"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.lastName",
      "name": "lastName"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolversGroup.groupName",
            "nodeType": 1,
            "dataType": "string",
            "name": "groupName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolversGroup",
              "groupName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolvers.fullName",
            "nodeType": 1,
            "dataType": "string",
            "name": "fullName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolvers",
              "fullName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.invoiceApproversGroup.groupName",
            "nodeType": 1,
            "dataType": "string",
            "name": "groupName",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "invoiceApproversGroup",
              "groupName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "stakeHolders.fullName",
            "nodeType": 1,
            "dataType": "string",
            "name": "fullName",
            "defaultValue": "",
            "path": [
              "stakeHolders",
              "fullName"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "name"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.name",
      "name": "name"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolversGroup.emailAddress",
            "nodeType": 1,
            "dataType": "string",
            "name": "emailAddress",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolversGroup",
              "emailAddress"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolvers.emailId",
            "nodeType": 1,
            "dataType": "string",
            "name": "emailId",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolvers",
              "emailId"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.invoiceApproversGroup.emailAddress",
            "nodeType": 1,
            "dataType": "string",
            "name": "emailAddress",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "invoiceApproversGroup",
              "emailAddress"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "stakeHolders.emailId",
            "nodeType": 1,
            "dataType": "string",
            "name": "emailId",
            "defaultValue": "",
            "path": [
              "stakeHolders",
              "emailId"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "emailId"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.emailId",
      "name": "emailId"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolversGroup.contactCode",
            "nodeType": 1,
            "dataType": "number",
            "name": "contactCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolversGroup",
              "contactCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolvers.contactCode",
            "nodeType": 1,
            "dataType": "number",
            "name": "contactCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolvers",
              "contactCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.invoiceApproversGroup.contactCode",
            "nodeType": 1,
            "dataType": "number",
            "name": "contactCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "invoiceApproversGroup",
              "contactCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "stakeHolders.contactCode",
            "nodeType": 1,
            "dataType": "number",
            "name": "contactCode",
            "defaultValue": "",
            "path": [
              "stakeHolders",
              "contactCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "contactCode"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.contactCode",
      "name": "contactCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolversGroup.clientContactCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "clientContactCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolversGroup",
              "clientContactCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolvers.clientContactCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "clientContactCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolvers",
              "clientContactCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.invoiceApproversGroup.clientContactCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "clientContactCode",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "invoiceApproversGroup",
              "clientContactCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "stakeHolders.clientContactCode",
            "nodeType": 1,
            "dataType": "string",
            "name": "clientContactCode",
            "defaultValue": "",
            "path": [
              "stakeHolders",
              "clientContactCode"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "clientContactCode"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.clientContactCode",
      "name": "clientContactCode"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string",
                "name": "\"User\"",
                "defaultValue": "",
                "path": [
                  "\"User\""
                ]
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          },
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.rank",
                "nodeType": 1,
                "dataType": "number",
                "name": "rank",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "rank"
                ]
              }
            ],
            "rhs": [
              {
                "jsonPath": "null",
                "nodeType": 1,
                "dataType": "string",
                "name": "null",
                "defaultValue": "",
                "path": [
                  "null"
                ]
              }
            ],
            "operator": "!=",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "stakeHolders.rank",
            "nodeType": 1,
            "dataType": "number",
            "name": "rank",
            "defaultValue": "",
            "path": [
              "stakeHolders",
              "rank"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "rank"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "",
      "jsonPath": "invoiceBasicDetails.stakeholders.rank",
      "name": "rank"
    },
    "mappingType": "if-else"
  },
  {
    "from": [
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolversGroup.groupId",
            "nodeType": 1,
            "dataType": "number",
            "name": "groupId",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolversGroup",
              "groupId"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "if"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"exceptionResolver\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"exceptionResolver\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.exceptionResolverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "exceptionResolverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.exceptionResolvers.groupId",
            "nodeType": 1,
            "dataType": "number",
            "name": "groupId",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "exceptionResolvers",
              "groupId"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"Group\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"Group\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "customAttributes.invoiceApproversGroup.groupId",
            "nodeType": 1,
            "dataType": "number",
            "name": "groupId",
            "defaultValue": "",
            "path": [
              "customAttributes",
              "invoiceApproversGroup",
              "groupId"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          {
            "lhs": [
              {
                "jsonPath": "stakeHolders.key",
                "nodeType": 1,
                "dataType": "string",
                "name": "key",
                "defaultValue": "",
                "path": [
                  "stakeHolders",
                  "key"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"invoiceApprover\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"invoiceApprover\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "=="
          },
          {
            "lhs": [
              {
                "jsonPath": "customAttributes.invoiceApproverType.name",
                "nodeType": 1,
                "dataType": "string",
                "name": "name",
                "defaultValue": "",
                "path": [
                  "customAttributes",
                  "invoiceApproverType",
                  "name"
                ]
              }
            ],
            "rhs": [
              {
                "name": "\"User\"",
                "value": "",
                "children": [
                  
                ],
                "jsonPath": "\"User\"",
                "nodeType": 1,
                "dataType": "string"
              }
            ],
            "operator": "==",
            "conjunction": "&&"
          }
        ],
        "assign": [
          {
            "jsonPath": "stakeHolders.groupId",
            "nodeType": 1,
            "dataType": "number",
            "name": "groupId",
            "defaultValue": "",
            "path": [
              "stakeHolders",
              "groupId"
            ]
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "elseif"
      },
      {
        "jsonPath": "~",
        "nodeType": 1,
        "dataType": "string",
        "name": "~",
        "defaultValue": "",
        "value": "",
        "children": [
          
        ],
        "condition": [
          
        ],
        "assign": [
          {
            "name": "\"0\"",
            "value": "",
            "children": [
              
            ],
            "jsonPath": "\"0\"",
            "nodeType": 1,
            "dataType": "string"
          }
        ],
        "path": [
          "~"
        ],
        "mapFunction": "else"
      }
    ],
    "to": {
      "path": [
        "invoiceBasicDetails",
        "stakeholders",
        "groupId"
      ],
      "nodeType": 1,
      "dataType": "number",
      "defaultValue": "0",
      "jsonPath": "invoiceBasicDetails.stakeholders.groupId",
      "name": "groupId"
    },
    "mappingType": "if-else"
  },
  {
    "from": {
      "jsonPath": "customAttributes.approverThresholdContractValue.convertedValue",
      "nodeType": 1,
      "dataType": "number",
      "name": "convertedValue",
      "defaultValue": ""
    },
    "to": {
      "jsonPath": "invoiceBasicDetails.customAttributes.invoiceThreshold",
      "nodeType": 1,
      "dataType": "number",
      "name": "invoiceThreshold",
      "defaultValue": ""
    },
    "mappingType": "one-to-one"
  },
  {
    "from": {
      "jsonPath": "lineDetails.accountingSplit.description",
      "nodeType": 1,
      "dataType": "string",
      "name": "description",
      "defaultValue": "",
      "path": [
        "lineDetails",
        "accountingSplit",
        "description"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "splitItems",
        "description"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.splitItems.description",
      "name": "description"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  },
  {
    "from": {
      "jsonPath": "lineDetails.description",
      "nodeType": 1,
      "dataType": "string",
      "name": "description",
      "defaultValue": "",
      "path": [
        "lineDetails",
        "description"
      ]
    },
    "to": {
      "path": [
        "lineDetails",
        "description"
      ],
      "nodeType": 1,
      "dataType": "string",
      "defaultValue": "",
      "jsonPath": "lineDetails.description",
      "name": "description"
    },
    "mappingType": "one-to-one",
    "assignInfo": {
      
    }
  }
]
