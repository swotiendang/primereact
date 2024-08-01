import { useContext } from 'react';
import { PrimeReactContext } from '../config';
import { ComponentContext } from './Component.context';

const defaultProps = {
    pt: undefined,
    ptOptions: undefined,
    unstyled: undefined,
    dt: undefined
};

const getDiffProps = (props1: any = {}, props2: any = {}) => {
    return Object.keys(props1).reduce(
        (acc, key) => {
            if (props2.hasOwnProperty(key)) {
                acc.props[key] = props1[key];
            } else {
                acc.attrs[key] = props1[key];
            }

            return acc;
        },
        { props: props2, attrs: {} as any }
    );
};

export const useComponent = (options: any = {}) => {
    const config = useContext(PrimeReactContext);
    const context = useContext(ComponentContext);
    const { props, attrs } = getDiffProps(options.props, { ...defaultProps, ...options.defaultProps });

    const ptm = (key: string) => {};
    const cx = (key: string) => {};

    return {
        props,
        attrs,
        ptm,
        cx
    };
};
