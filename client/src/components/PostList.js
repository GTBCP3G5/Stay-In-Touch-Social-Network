export default function PostList({ posts, title }) {
    if(!posts.length) {
        return <h2>No Posts Yet</h2>
    }

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}