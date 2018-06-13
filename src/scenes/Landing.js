import React from 'react';
import { Link } from 'react-router-dom';

import Paragraph from '../components/Paragraph';
import { HanddrawnButton } from '../components/Button';

export default () => (
    <React.Fragment>
    <Paragraph handdrawn>
        Welcome to my site. Here you can find my resume, personal projects and other miscellanous information. Have a good time.
      </Paragraph>
      <Paragraph handdrawn>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat sapien, rutrum non pretium ut, efficitur tincidunt ligula. Aenean sed laoreet magna, sed pulvinar mi. Aliquam mattis justo vel velit iaculis, at semper turpis aliquam. Sed nec augue mattis, condimentum massa id, interdum tellus. Aenean commodo, mi eget condimentum malesuada, diam nisl aliquet neque, quis sollicitudin ipsum enim et elit. Nulla tempor pretium nulla pellentesque aliquet. Quisque ut lobortis arcu, nec vehicula leo. Proin ultricies purus vel feugiat consectetur. Curabitur ex quam, gravida ut ipsum ac, vestibulum commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam purus tortor, tincidunt vel eros a, volutpat consequat mauris. Sed est erat, rutrum sed lobortis et, commodo nec sapien. Suspendisse ullamcorper dui quis congue malesuada. Curabitur libero massa, varius a enim vel, bibendum tincidunt nunc.
      </Paragraph>
      <Paragraph handdrawn>
        Ut malesuada libero a leo eleifend blandit. Donec eget sagittis odio, sit amet ornare felis. Integer dignissim mi metus, quis consectetur sem vestibulum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ultrices ultricies tellus sit amet laoreet. Integer vehicula luctus libero, id feugiat nulla porttitor ac. Maecenas metus arcu, lobortis id rutrum sed, malesuada at arcu. Sed quam lectus, porta vitae dolor ac, tempus dapibus ex. Nam nec leo sit amet lacus eleifend varius. In feugiat vehicula libero vitae elementum. Suspendisse venenatis ipsum et varius commodo. Aliquam sapien nulla, viverra congue varius sed, tempus ut orci.
      </Paragraph>
      <Link to='resume'>
        <HanddrawnButton>learn more</HanddrawnButton>
      </Link>
    </React.Fragment>
);