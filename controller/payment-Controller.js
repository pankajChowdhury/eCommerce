import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantKey} from '../server.js';
import formidable from 'formidable';
import https from 'https';



export const addPaymentGateway =  async ( request, response) => {
    let paytmChecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);

    try{

        let params = {
            ...paytmParams , 'CHECKSUMHASH' :paytmChecksum
        }
        //console.log("dekho ",params);

        response.json(params);

    }catch(error){
        console.log(error);

    }


}

export const paymentResponse = (request, response) => {
    let form = new formidable.IncomingForm();
    
    let p = request.body.CHECKSUMHASH;
    delete request.body.CHECKSUMHASH;
  

   // there is bug that if we do payment more than once it gives a error
    // if(!request.body){
    //     console.log("req.body ka orignal value", request.body);
    //     request.body='';
    // }
    // if(!p){
    //     console.log("paytmCheckSum ka orignal value", paytmCheckSum);
    //     p='';
    // }
   // uptohere
   

    let isVerified = paytmchecksum.verifySignature(request.body,'bKMfNxPPf_QdZppa',p);
    if(isVerified){
     
        paytmParams['MID'] = request.body.MID;
        paytmParams['ORDERID'] = request.body.ORDERID;
        paytmchecksum.generateSignature(paytmParams,'bKMfNxPPf_QdZppa').then(function (checksum) {
            paytmParams['CHECKSUMHASH'] = checksum;

            let post_data = JSON.stringify(paytmParams);
            let options = {
                hostname:  'securegw-stage.paytm.in',
                port: 443,
                path : '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Content-Length' : post_data.length
                }

            };
            let res=''

            let post_req = https.request(options, function(post_res){
              
                post_res.on('data', function(chunk){
                    res += chunk;
                })
                post_res.on('end', function(){
                    let result = JSON.parse(res)
                   // console.log(result);
                    response.redirect('/')
                });
            });
            post_req.write(post_data);
            post_req.end();
        })

    }else{
        console.log("Checksum Mismatched!")
    }

}