import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };
  // handleFeedback = type => {
  //   this.setState(prevState => ({
  //     [type]: prevState[type] + 1,
  //   }));
  // };
  const total = good + neutral + bad;
  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);
  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   const { good } = this.state;
  //   return total === 0 ? 0 : Math.round((good / total) * 100);
  // };

  // const { good, neutral, bad } = this.state;
  // const total = this.countTotalFeedback();
  // const positivePercentage = this.countPositiveFeedbackPercentage();
  // const feedbackOptions = Object.keys(this.state);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
