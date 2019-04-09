/*
* 线性数据转化为树。树组件转格式
* data为线性数据
* parent_id为顶级节点id
* [defaultProps]定义原始数组内对象格式
* [targetProps]为输出格式
* */
export function toTree(data, parent_id, defaultProps,targetProps) {
    if(!defaultProps){
        defaultProps={
            id: 'id',
            parent_id: 'pid',
            label: 'name'
        }
    }
    if(!targetProps){
        targetProps={
            children: 'children',
            label: 'name',
            id: 'id',
            originalData: 'data'
        }
    }
    let tree = [];
    let temp;
    for (let i = 0; i < data.length; i++) {
        let dataI=data[i]
        if (dataI[defaultProps.parent_id] === parent_id) {
            let obj = {};
            obj[targetProps.originalData]=dataI
            obj[targetProps.label]=dataI[defaultProps.label]
            obj[targetProps.id]=dataI[defaultProps.id]
            temp = toTree(data,dataI[defaultProps.id],defaultProps,targetProps);
            if (temp.length > 0) {
                obj[targetProps.children] = temp;
            }
            tree.push(obj);
        }
    }
    return tree;
}