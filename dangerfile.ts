import {
  danger,
  fail,
  type GitHubPRDSL as LibGitHubDSL,
  type GitHubMergeRef,
  type GitHubRepo,
} from 'danger';

import { ProjectPrefix } from './project.config';

type GitHubPRDSL = LibGitHubDSL & {
  head: GitHubMergeRef & {
    repo: GitHubRepo & {
      has_projects: boolean;
    };
  };
  milestone: Record<string, unknown> | null;
  labels: unknown[];
  project_id: string | null;
};

const BranchPrefix = {
  TASK: 'task',
  FIX: 'fix',
} as const;

const DangerConfig = {
  TITLE: {
    PATTERN: new RegExp(
      `^((${ProjectPrefix.APPS.join(
        '|',
      )})-[0-9]{1,6}): (.*\\S)$|(${ProjectPrefix.ENVIRONMENTS.join(
        '|',
      )}) to (${ProjectPrefix.ENVIRONMENTS.join('|')})$`,
    ),
  },
  BRANCH: {
    PATTERN: new RegExp(
      `^((${Object.values(BranchPrefix).join('|')})/(${ProjectPrefix.APPS.join(
        '|',
      )})-[0-9]{1,6})-[a-zA-Z0-9-]+$|(${ProjectPrefix.ENVIRONMENTS.join(
        '|',
      )})$`,
    ),
  },
};

const pr = danger.github.pr as GitHubPRDSL;

const checkTitle = (titlePattern: RegExp) => {
  const isTitleValid = titlePattern.test(pr.title);

  if (!isTitleValid) {
    fail(
      `The pull request title should match the following pattern: ${titlePattern}.`,
    );
  }
};

const checkBranch = (branchPattern: RegExp) => {
  const isBranchValid = branchPattern.test(pr.head.ref);

  if (!isBranchValid) {
    fail(
      `The pull request branch should match the following pattern: ${branchPattern}.`,
    );
  }
};

const applyDanger = () => {
  if (DangerConfig.TITLE.PATTERN) {
    checkTitle(DangerConfig.TITLE.PATTERN);
  }

  if (DangerConfig.BRANCH.PATTERN) {
    checkBranch(DangerConfig.BRANCH.PATTERN);
  }
};

applyDanger();
