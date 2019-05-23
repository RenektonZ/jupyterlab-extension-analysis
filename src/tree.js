import React, { PureComponent, ReactNode } from 'react';
import { Icon, Tree, Divider } from 'antd';
import '../style/index.css';

const { TreeNode } = Tree;
const DirectoryTree = Tree.DirectoryTree;

// export interface ExploreTreeProps {
//   className?: string;
//   treeData: Array<any>,
//   expendId: Array<any>,
// }

class ExploreTree extends PureComponent {
  componentDidMount(){
    // fetch('http://dev.aps.zetyun.cn/aps/pipes/dataset/ref').then(response => {
    //   if(response.ok){
    //     return response.json();
    //   }
    //   throw new Error('Request failed!');
    // } , networkError => console.log(networkError.message)
    // ).then(jsonResponse => {
    //   console.log(jsonResponse);
    //   this.setState({
    //     data: jsonResponse
    //   })
    // })
  }

  renderTree = (data) => {
    return data && data.length > 0 && data.map((v)=>{
      if(v.children){
        if(v.children.length>0){
          return (
            <TreeNode title={v.name} key={v.id}>
              {this.renderTree(v.children)}
            </TreeNode>
          );
        } else {
          return (
            <TreeNode title={v.name} key={v.id} />
          );
        }
      } else {
        return (
          <TreeNode title={v.name} key={v.id} />
        );
      }
    })
  }

  render() {
    const { treeData, className } = this.props;
    return (
      <div className='tree'>
        <DirectoryTree
          showIcon={false}
          switcherIcon={<Icon type="down" />}
        >
          {this.renderTree(treeData)}
        </DirectoryTree>
      </div>
    );
  }
}

export default ExploreTree;
