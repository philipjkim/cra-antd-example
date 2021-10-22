import React from 'react';
import {
  Typography,
  Space,
  Divider,
  Table,
  Menu,
  Layout  
} from 'antd';
import './App.less';

const {Title, Paragraph} = Typography;

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name)
  },
  {
    title: 'Pos.',
    dataIndex: 'position',
    filters: [
      {
        text: 'C',
        value: 'C',
      },
      {
        text: 'F',
        value: 'F',
      },
      {
        text: 'G',
        value: 'G',
      },
    ],
    onFilter: (value, record) => record.position.indexOf(value) > -1,
    sorter: (a, b) => a.position.localeCompare(b.position),
  },
  {
    title: 'Pts.',
    dataIndex: 'points',
    sorter: (a, b) => a.points - b.points
  },
];

const data = [
  {
    key: '1',
    name: 'LeBron James',
    position: 'G,F',
    points: 25.1,
  },
  {
    key: '2',
    name: 'Russell Westbrook',
    position: 'G',
    points: 20.0,
  },
  {
    key: '3',
    name: 'Anthony Davis',
    position: 'F',
    points: 24.5,
  },
]

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params->', pagination, filters, sorter, extra);
}

const App = () => (
  <>
    <section style={{textAlign: 'center', marginTop: 48, marginBottom: 40}}>
      
      <Space align="start">
        <img
          style={{width: 90, height: 50}}
          // src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          // src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
          src="https://1000logos.net/wp-content/uploads/2017/04/Logo-NBA-1024x640.png"
          alt="Ant Design"
        />
        <Title level={2} style={{marginBottom: 10}}>
          Example - Player List
        </Title>        
      </Space>
      <Paragraph>
      It was made for fantasy draft.
      </Paragraph>
    </section>
    <Divider style={{marginBottom: 10}}>Data</Divider>

    <Layout>    

    <Sider width={200} className="site-layout-background">

    <Menu        
        style={{ height: 556 }}
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title="MLB">
          <Menu.ItemGroup key="g1" title="1차">
            <Menu.Item key="1">week1</Menu.Item>
            <Menu.Item key="2">week2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="2차">
            <Menu.Item key="3">week3</Menu.Item>
            <Menu.Item key="4">week4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2"  title="NBA">
          <Menu.Item key="5">순위</Menu.Item>
          <Menu.Item key="6">기록</Menu.Item>
          <SubMenu key="sub3" title="대진">
            <Menu.Item key="7">week1</Menu.Item>
            <Menu.Item key="8">week2</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title="NFL">
          <Menu.Item key="9">구단</Menu.Item>
          <Menu.Item key="10">성적</Menu.Item>
          <Menu.Item key="11">결과</Menu.Item>
          <Menu.Item key="12">일정</Menu.Item>
        </SubMenu>
      </Menu>
      </Sider>
      <Content>
      {/* <Layout style={{ padding: '0 24px' }}> */}
      <Table columns={columns} dataSource={data} onChange={onChange}/>
      {/* </Layout> */}
      </Content>
      </Layout>

  </>
);

export default App;
