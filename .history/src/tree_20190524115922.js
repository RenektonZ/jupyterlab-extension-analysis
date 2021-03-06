import React, { PureComponent, ReactNode } from 'react';
import { Icon, Tree, Divider, Tooltip } from 'antd';
import { Input } from 'antd';
import axios from './utils/request';
import data from './data';
import '../style/index.css';

const { TreeNode } = Tree;
const DirectoryTree = Tree.DirectoryTree;

// export interface ExploreTreeProps {
//   className?: string;
//   treeData: Array<any>,
//   expendId: Array<any>,
// }

class ExploreTree extends PureComponent {
  state = {
    treeData: []
  }
  componentDidMount(){
    axios.get('/aps/pipes/project/24bc702c-8244-42af-ab68-9c894ce4867c/notebook/module/treelist').then(jsonResponse => {
      console.log(jsonResponse, 'aaaa');
    })
    this.setState({
      treeData: data
    })
  }

  renderTree = (data) => {
    return data && data.length > 0 && data.map((v)=>{
      const title = <span style={{ display: 'flex', justifyContent: 'space-between' }}><Tooltip title={v.name}>{v.name}</Tooltip> {v.childrenCount ? <span>({v.childrenCount})</span> : ''}</span>;
      if(v.children){
        if(v.children.length>0){
          return (
            <TreeNode title={title} key={v.id} >
              {this.renderTree(v.children)}
            </TreeNode>
          );
        } else {
          return (
            <TreeNode title={title} key={v.id} />
          );
        }
      } else {
        const copy = <span style={{ display: 'flex', justifyContent: 'space-between' }}><Tooltip title={v.name}>{v.name}</Tooltip><span><Tooltip title="复制引用代码"><Icon type="copy" /></Tooltip></span></span>
        return (
          <TreeNode title={copy} key={v.id} />
        );
      }
    })
  }

  search = (e) => {
    console.log(e.target.value);
  }

  reload = () => {

  }

  render() {
    const { treeData } = this.state;
    return (
      <div className='tree'>
        <div className="searchWrap">
          <Input className='search' placeholder="请输入名称" onChange={this.search} suffix={<Icon onClick={this.reload} type="reload" />} />
        </div>
        <div className='treelist'>
          {
            treeData.length > 0 && (
              <DirectoryTree
                blockNode
                showIcon={false}
                switcherIcon={<Icon type="down" />}
              >
                {this.renderTree(treeData)}
              </DirectoryTree>
            )
          }
        </div>
      </div>
    );
  }
}

export default ExploreTree;
