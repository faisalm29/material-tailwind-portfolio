const TulusTweet = ({ tweetId }: { tweetId: string }): JSX.Element => {
  return (
    <>
      <blockquote className="twitter-tweet not-prose" data-theme="light">
        <p lang="en" dir="ltr">
          .<a href="https://twitter.com/tulusm?ref_src=twsrc%5Etfw">@tulusm</a>
          ’s &quot;Hati-Hati di Jalan&quot; breaks the all-time stream record on
          Spotify Indonesia with 969K plays and enters the global chart for the
          first time (#93).
        </p>
        &mdash; chart data (@chartdata){" "}
        <a
          href={`https://twitter.com/chartdata/status/${tweetId}?ref_src=twsrc%5Etfw`}
        >
          March 7, 2022
        </a>
      </blockquote>{" "}
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </>
  );
};

export default TulusTweet;
