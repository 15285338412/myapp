import Mock from "mockjs";

import one from "./one.json"
import two from './two.json'
import three from './three.json'
import four from './four.json'
import map from './china.json'

Mock.mock('/mock/getOneData','get',{code:200,data:one})

Mock.mock('/mock/getTwoData','get',{code:200,data:two})

Mock.mock('/mock/getThreeData','get',{code:200,data:three})

Mock.mock('/mock/getFourData','get',{code:200,data:four})

Mock.mock('/mock/map','get',{code:200,data:map})
