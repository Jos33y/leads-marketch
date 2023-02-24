import $ from "jquery";

export const SendPersonalInfo = (title, data) => {
   
    $.ajax({
        
        url: "https://johngoodell.biz/mk/index.php", 
        method: "POST",
        dataType: "JSON",
        data: {
            page_title: title,
            user_email: data.userEmail,
            full_name: data.fullName,
            phone_number: data.phoneNumber,
            user_age: data.userAge,
            user_country: data.userCountry,
            session_id: data.userSessions,
        },
        success: function () { },
        complete: function () { },
    });
}

export const SendTradingExp = (title, data) => {
    // console.log("value:", title, "title:", data.features);
   
    $.ajax({
        
        url: "https://johngoodell.biz/mk/index.php", 
        method: "POST",
        dataType: "JSON",
        data: {
            page_title: title,
            trade_exp_one: data.tradeExp1,
            trade_exp_two: data.tradeExp2,
            trade_features: data.features,
            session_id: data.userSessions,
        },
        success: function () { },
        complete: function () { },
    });
}
  

export const SendFinanceBg = (title, data) => {
   
    $.ajax({
        
        url: "https://johngoodell.biz/mk/index.php", 
        method: "POST",
        dataType: "JSON",
        data: {
            page_title: title,
            finance_bg_1: data.financeBg1,
            finance_bg_2: data.financeBg2,
            finance_bg_3: data.financeBg3,
            finance_bg_4: data.financeBg4,
            session_id: data.userSessions,
        },
        success: function () { },
        complete: function () { },
    });
}


export const SendMarketKnow = (title, data) => {
   
    $.ajax({
        
        url: "https://johngoodell.biz/mk/index.php", 
        method: "POST",
        dataType: "JSON",
        data: {
            page_title: title,
            market_know_1: data.marketKnow1,
            market_know_2: data.marketKnow2,
            market_know_3: data.marketKnow3,
            market_know_4: data.marketKnow4,
            session_id: data.userSessions,
        },
        success: function () { },
        complete: function () { },
    });
}




export const SendFinalQue = (title, data) => {
   
    $.ajax({
        
        url: "https://johngoodell.biz/mk/index.php", 
        method: "POST",
        dataType: "JSON",
        data: {
            page_title: title,
            experience: data.experience,
            session_id: data.userSessions,
        },
        success: function () { },
        complete: function () { },
    });
}

// http://localhost/westore/marketch/index.php