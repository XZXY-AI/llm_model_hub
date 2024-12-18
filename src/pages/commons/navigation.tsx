// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import  { SideNavigationProps,SideNavigation,Badge} from '@cloudscape-design/components';
import i18n from '../../common/i18n';

const navHeader = { text: '服务中心', href: '#/' };
export const navItems: SideNavigationProps['items'] = [
  {
    type: 'section',
    text: '模型训练服务',
    items: [
      { type: 'link', text: '模型训练', href: '/jobs' },
    ],
  },
  {
    type: 'section',
    text: '模型部署',
    items: [
      { type: 'link', text: '部署节点', href: '/endpoints' },
    ],
  },
  {
    type: 'section',
    text: '演示',
    items: [
      { type: 'link', text: 'Chat', href: '/chat' },
    ],
  }, 
  {
    type: 'section',
    text: i18n.t('readme'),
    items: [
      { type: 'link', external: true, 
      info: <Badge color="green">必读</Badge>,
      text: '使用说明', href: 'https://iqzeljuzeco.feishu.cn/wiki/OQZBwllXXiyy74k01G6cdKhXnxg' },
    ],
  }, 
];


interface NavigationProps {
  activeHref?: string;
  header?: SideNavigationProps['header'];
  items?: SideNavigationProps['items'];
}

export function Navigation({
  activeHref,
  header = navHeader,
  items = navItems,
}: NavigationProps) {
  return <SideNavigation items={items} header={header} activeHref={activeHref} />;
}
