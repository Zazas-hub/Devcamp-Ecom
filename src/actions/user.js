import { SET_USER_PURCHASES ,SET_PURCHASE_DETAIL} from "./types";
export function setPurchaseDetail(_id){
    return({
        type:SET_PURCHASE_DETAIL,
        payload:_id
    })
}
export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
        {
            _id: 0,
            total: 19.40,
            orderNumber: 'A0048248343',
            orderDate: new Date().toDateString(),
            creditCard: '-0000',
            user: {
                name: 'Ronald Peter',
                shippingAddress: '1234 West State Street'
            }
        },
        {
            _id: 1,
            total: 19.40,
            orderNumber: 'A0048248343',
            orderDate: new Date().toDateString(),
            creditCard: '-0000',
            user: {
                name: 'Jordan Hudgens',
                shippingAddress: '1234 West State Street'
            }
        },
        {
            _id: 2,
            total: 20.40,
            orderNumber: 'A0048248343',
            orderDate: new Date().toDateString(),
            creditCard: '-0000',
            user: {
                name: 'Peter Fred',
                shippingAddress: '1234 West State Street'
            }
        },{
            _id: 3,
            total: 30.40,
            orderNumber: 'A00535848248343',
            orderDate: new Date().toDateString(),
            creditCard: '-0000',
            user: {
                name: ' Hudgens',
                shippingAddress: '1234 West State Street'
            }
        },{
            _id: 4,
            total: 40.40,
            orderNumber: 'A0048242582843',
            orderDate: new Date().toDateString(),
            creditCard: '-0288000',
            user: {
                name: 'big King',
                shippingAddress: '1234 West State Street'
            }
        },{
            _id: 5,
            total: 40.40,
            orderNumber: 'A0048244242343',
            orderDate: new Date().toDateString(),
            creditCard: '-002823800',
            user: {
                name: 'brandon King',
                shippingAddress: '1234 West State Street'
            }
        },{
            _id: 6,
            total: 40.40,
            orderNumber: 'A0048244278343',
            orderDate: new Date().toDateString(),
            creditCard: '-08283000',
            user: {
                name: 'zazas King',
                shippingAddress: '1234 West State Street'
            }
        },{
            _id: 7,
            total: 40.40,
            orderNumber: 'A0048272248343',
            orderDate: new Date().toDateString(),
            creditCard: '-005368200',
            user: {
                name: 'Bran King',
                shippingAddress: '1234 West State Street'
            }
        },
    ],
  };
}
