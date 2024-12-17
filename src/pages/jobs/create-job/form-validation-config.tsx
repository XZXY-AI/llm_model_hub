// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import uniq from 'lodash/uniq';
import { SelectProps } from '@cloudscape-design/components';

type FormDataAttributes =
  | 'cloudFrontRootObject'
  | 'alternativeDomainNames'
  | 's3BucketSelectedOption'
  | 'certificateExpiryDate'
  | 'certificateExpiryTime'
  | 'httpVersion'
  | 'ipv6isOn'
  | 'functions'
  | 'originId'
  | 'customHeaders';

const validateEmpty = (value: string | undefined | null | File[]) => Boolean(value && value.length > 0);


const validateS3Bucket = (value: string) => {
  return !value.includes('NO-ACCESS');
};




const validateNumers = (value: string) => {
  const numberRegex = new RegExp(/[^0-9]/gm);
  const isValid = !numberRegex.test(value);
  return isValid;
};


type ValidationFunction = (value: any) => boolean;
type ValidationText = string | ((value: string) => string);

const validationConfig: Record<
  string,
  Array<{ validate: ValidationFunction; errorText?: ValidationText; warningText?: ValidationText }>
> = {
  job_name: [{ validate: validateEmpty, errorText: '请填写项目名称.' }],
  model_name: [{ validate: validateEmpty, errorText: '请填写模型名称.' }],
  prompt_template: [{ validate: validateEmpty, errorText: '请填写提示模板.' }],
  job_type: [{ validate: validateEmpty, errorText: '请填写微调类型.' }],
  // dataset:[{ validate: validateEmpty, errorText: 'Dataset is required.' }],
  datasetInfo:[{ validate: validateEmpty, errorText: '请填写数据集信息.' }],
  stage: [{ validate: validateEmpty, errorText: '请填写训练阶段.' }],
  instance_type: [{ validate: validateEmpty, errorText: '请填写实例类型.' }],
  // instance_num: [{ validate: validateEmpty, errorText: 'Instance amount is required.' },
  //   {validate:validateNumers,errorText: 'Only integer is supported.' }
  // ],
  s3BucketSelectedOption: [
    {
      validate: (selectedOption: SelectProps.Option) => validateEmpty(selectedOption?.value),
      errorText: '请填写S3 bucket .',
    },
    {
      validate: (selectedOption: SelectProps.Option) => validateS3Bucket(selectedOption?.label || ''),
      errorText:
        "模型中心(Model Hub)没有权限访问这个bucket。您必须为存储桶启用访问控制列表(ACL).",
    },
  ],
};

export default function validateField(attribute: FormDataAttributes, value: any, customValue: string = value) {
  const validations = validationConfig[attribute];
  // console.log('validations', attribute,validations);
  if(validations){
    for (const validation of validations) {
      const { validate, errorText, warningText } = validation;
  
      const isValid = validate(value);
      if (!isValid) {
        return {
          errorText: typeof errorText === 'function' ? errorText(customValue) : errorText,
          warningText: typeof warningText === 'function' ? warningText(customValue) : warningText,
        };
      }
    }
  }
  return { errorText: null };
}
