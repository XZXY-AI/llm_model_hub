// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import BreadcrumbGroup, { BreadcrumbGroupProps } from '@cloudscape-design/components/breadcrumb-group';

export const jobsBreadcrumbs = [
  {
    text: '项目',
    href: '/jobs',
  },
];

export const createjobBreadcrumbs = [
  ...jobsBreadcrumbs,
  {
    text: '创建项目',
    href: '/jobs/createjob',
  },
];

export const endpointsBreadcrumbs = [
  {
    text: '终端管理',
    href: '/endpoints',
  },
];

export const chatBreadcrumbs = [
  {
    text: '环境',
    href: '/playground',
  },
];


export function Breadcrumbs({ items }: { items: BreadcrumbGroupProps['items'] }) {
  return (
    <BreadcrumbGroup
      items={[{ text: 'Model Hub', href: '/jobs' }, ...items]}
      expandAriaLabel="展示路径"
      ariaLabel="Breadcrumbs"
    />
  );
}
