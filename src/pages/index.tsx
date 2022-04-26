import * as React from 'react';
import data from '../../data/data.json';
import Layout from '../components/layout';
import Library from '../components/library';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const sections = data.reduce((memo, item) => {
  const { stage } = item;
  if (stage === 'Programming Language') {
    return memo;
  }
  if (!memo[stage]) {
    memo[stage] = [];
  }

  memo[stage].push(item);
  return memo;
}, {});

// markup
const IndexPage = () => {
  return (
    <Layout aside={Object.keys(sections)}>
      {Object.keys(sections).map((stage) => (
        <div key={stage}>
          <h3
            id={stage}
            className="p-2 mt-8 mb-4 text-black bg-white border-1 border-t-4 border-blue-500 dark:bg-blue-100"
          >
            {stage}
          </h3>
          {sections[stage].map((item: any) => (
            <Library item={item} />
          ))}
        </div>
      ))}
    </Layout>
  );
};

export default IndexPage;
