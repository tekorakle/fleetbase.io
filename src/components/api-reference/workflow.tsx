import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface WorkflowProps {
  /** Display title — e.g. "Integrated Vendor Flow". */
  title: string;
  /** Short summary of what the workflow accomplishes. */
  description?: ReactNode;
  /** Numbered <WorkflowStep>s. */
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper for a sequenced workflow page. Renders a header and lays out the
 * child <WorkflowStep>s as a numbered sequence.
 */
export function Workflow({
  title,
  description,
  children,
  className,
}: WorkflowProps) {
  return (
    <div className={cn('api-workflow', className)}>
      <header className="mb-6">
        <h1 className="!mt-0 mb-2 text-xl font-semibold tracking-tight">
          {title}
        </h1>
        {description && (
          <div className="text-xs leading-snug text-muted-foreground [&>p]:my-0">
            {description}
          </div>
        )}
      </header>

      <ol className="space-y-8 [counter-reset:workflow-step]">{children}</ol>
    </div>
  );
}

interface WorkflowStepProps {
  /** Step heading. */
  title: string;
  /** Optional anchor id; defaults to slugified title. */
  id?: string;
  /** Step prose + an <Endpoint> or <HttpExample>. */
  children: ReactNode;
}

/**
 * A single step in a <Workflow>. Renders an automatically-numbered marker on
 * the left and the step content (description + request/response) on the right.
 */
export function WorkflowStep({ title, id, children }: WorkflowStepProps) {
  const slug = id ?? slugify(title);

  return (
    <li
      id={slug}
      className="api-workflow-step relative scroll-mt-16 [counter-increment:workflow-step] lg:before:absolute lg:before:-left-10 lg:before:top-0 lg:before:flex lg:before:h-6 lg:before:w-6 lg:before:items-center lg:before:justify-center lg:before:rounded-full lg:before:bg-primary/10 lg:before:font-mono lg:before:text-xs lg:before:font-semibold lg:before:text-primary lg:before:content-[counter(workflow-step)]"
    >
      <h2 className="!mt-0 mb-3 scroll-mt-16 text-base font-semibold tracking-tight">
        <a
          href={`#${slug}`}
          className="!text-foreground !no-underline hover:!text-primary"
        >
          {title}
        </a>
      </h2>
      <div className="api-workflow-step-content">{children}</div>
    </li>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
