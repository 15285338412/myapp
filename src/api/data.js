import request from "./index";
export function getOneJsonData(){
    return request({
        url:'/getOneData',
        method:'GET'
    })
}
export function getTwoJsonData(){
    return request({
        url:'/getTwoData',
        method:'GET'
    })
}

export function getThreeJsonData(){
    return request({
        url:'/getThreeData',
        method:'GET'
    })
}

export function getFourJsonData(){
    return request({
        url:'/getFourData',
        method:'GET'
    })
}

export function getChinaMap(){
    return request({
        url:'/map',
        method:'GET'
    })
}
