import axios from 'axios'
import nprogress from 'nprogress'//引入进度条
import "nprogress/nprogress.css"
const requests = axios.create({
    baseURL:'/mock',
    timeout:5000
});
//请求拦截
requests.interceptors.request.use((config)=>{
    nprogress.start()//进度条开始
    return config;
})
//响应拦截
requests.interceptors.response.use((res)=>{
    nprogress.done()//进度条结束
    return res.data;
},(err)=>{
    console.log(err);
});
export default requests;