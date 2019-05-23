# jupyterlab-extension-analysis

* jupyterlab-extension-analysis
```
  yarn
  yarn build
  jupyter labextension install . --no-build
```
* jupyter
```
jupyter lab
```
### jupyter版本1.0.0a3
* 安装conda，创建jbl环境
* 进入jbl环境 `conda activate jbl`
* 执行下列代码
```
git clone https://github.com/<your-github-username>/jupyterlab.git
cd jupyterlab
pip install -e .
jlpm install
jlpm run build  # Build the dev mode assets (optional)
jlpm run build:core  # Build the core mode assets (optional)
jupyter lab build  # Build the app dir assets (optional)
 
```
