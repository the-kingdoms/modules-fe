import { Meta, IconGallery, IconItem } from '@storybook/blocks';
import Icon, { iconKey, IconCategory } from './Icon';
import { FlexBox } from '../layout';

export default {
    title: 'Components/Icon/Icon List',
    component: Icon,
    tags: ['autodocs'],
};

export const Docs = () => (
    <>
        <Meta title="Components/Icon/Icon List" />
        {Object.entries(IconCategory).map(([category, icon]) => (
            <div key={category}>
                <div className="py-5">{category}</div>
                <IconGallery>
                    {Object.keys(icon).map((icon) => (
                        <IconItem key={icon} name={icon as iconKey}>
                            <Icon icon={icon as iconKey} />
                        </IconItem>
                    ))}
                </IconGallery>
            </div>
        ))}
    </>
);

Docs.parameters = {
    docs: {
        page: () => (
            <>
                <Meta title="Components/Icon/Icon List" />
                {Object.entries(IconCategory).map(([category, icon]) => (
                    <div key={category}>
                        <div className="pb-7 font-bold">{category}</div>
                        <IconGallery>
                            {Object.keys(icon).map((icon) => (
                                <IconItem key={icon} name={icon as iconKey}>
                                    <Icon icon={icon as iconKey} />
                                </IconItem>
                            ))}
                        </IconGallery>
                    </div>
                ))}
            </>
        ),
    },
};
