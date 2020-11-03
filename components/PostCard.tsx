import { FC } from 'react';
import { Card, ResponsiveEmbed } from 'react-bootstrap';
import { CardProps } from 'react-bootstrap/Card';
import { PostProps } from 'lib/types';

type PostCardProps = CardProps & PostProps;

const PostCard: FC<PostCardProps> = ({ post: { id, data } }: PostCardProps) => (
  <Card className='mb-4 flex-row'>
    <ResponsiveEmbed aspectRatio='1by1' className='flex-shrink-0'>
      <Card.Img src={`img/posts/${id}.jpg`} />
    </ResponsiveEmbed>
    <div className='d-flex flex-column m-2'>
      <Card.Title className=''>{data.title}</Card.Title>
      <Card.Text className='text-muted'><em>{data.date}</em></Card.Text>
      <Card.Text className='lines-2'>{data.summary}</Card.Text>
    </div>
  </Card>
);

export default PostCard;
