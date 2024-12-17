// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { BreadcrumbGroup, HelpPanel } from '@cloudscape-design/components';
import { resourcesBreadcrumbs } from '../../common/breadcrumbs';
import { ExternalLinkGroup } from '../commons';

export const Breadcrumbs = () => (
  <BreadcrumbGroup items={resourcesBreadcrumbs} expandAriaLabel="展示路径" ariaLabel="Breadcrumbs" />
);

const toolsFooter = (
  <ExternalLinkGroup
    items={[
      {
        text: '配置分配',
        href: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html',
      },
      {
        text: '控制台输出',
        href: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-returned.html',
      },
    ]}
  />
);
export const ToolsContent = () => (
  <HelpPanel footer={toolsFooter} header={<h2>Distributions</h2>}>
    <p>
      查看当前分发版和相关信息，例如关联的域名、交付方式、SSL证书等。要进一步深入了解详细信息，请选择单个分发版的名称
    </p>
  </HelpPanel>
);
