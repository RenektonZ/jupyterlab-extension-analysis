import * as React from 'react';
import {
  // JupyterLab,
  JupyterFrontEndPlugin,
  JupyterFrontEnd,
} from '@jupyterlab/application';
import {
  ICommandPalette,
  ReactWidget,
} from '@jupyterlab/apputils';
import Tree from './tree';
// import {
//   Widget
// } from '@phosphor/widgets';
// import Tree from './tree';
// import style from '~antd/dist/antd.css';
// import  './index.module.less';
import data from './data';

/**
 * Initialization data for the jupyterlab-extension-demo extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-extension-analysis',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension jupyterlab-extension-analysis is activated!');
    let div = ReactWidget.create(
      <div className='treeWrap'>
        <Tree treeData={data} />
      </div>
    );
    div.id = 'analysisTree';
    div.title.label = '分析模块';
    app.shell.add(div, 'left', { rank: 200 });
  }
};

export default extension;
